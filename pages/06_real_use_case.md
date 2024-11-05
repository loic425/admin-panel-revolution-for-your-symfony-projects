---
layout: center
---

# Real use case

Let's create an admin panel to manage conference talks

---

Create a speaker entity

```shell
symfony console make:entity Speaker
```

| Name        | Type     | Nullable |
|-------------|----------|----------|
| firstName   | string   | no       |
| lastName    | string   | no       |
| companyName | string   | yes      |
| avatar      | oneToOne | yes      |

---

Create a speaker avatar entity

```shell
symfony console make:entity SpeakerAvatar
```

| Name | Type        | Nullable |
|------|-------------|----------|
| file | SplFileInfo | no       |

---

Create a speaker form type

```php{all|1|2}
symfony console make:form SpeakerType Speaker
symfony console make:form SpeakerAvatarType SpeakerAvatar
```

---

Adapt the speaker form type

```php{all|8-10}
// ...
class SpeakerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // ...
            ->add('avatar', SpeakerAvatarType::class, [
                'required' => false,
            ])
            // ...
        ;
    }
    // ...
}
```

---

Create a speaker grid

```php
symfony console make:grid Speaker
```

---
layout: two-cols-header
---

Declare entity as a Sylius resource
& add your basic operations

::left::

```php {all|2|3|4|5|6|7-13|8|9|10|11|12|15|no}
#[ORM\Entity(repositoryClass: SpeakerRepository::class)]
#[AsResource(
    section: 'admin',
    formType: SpeakerType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Create(),
        new Update(),
        new Index(grid: SpeakerGrid::class),
        new Delete(),
        new BulkDelete(),
    ],
)]
class Speaker implements ResourceInterface
```

::right::

```shell{no|all}
 ------------------------------ ---------------------------
  Name                           Path                                           
 ------------------------------ ---------------------------         
  app_admin_speaker_create      /admin/speakers/new                            
  app_admin_speaker_update      /admin/speakers/{id}/edit                      
  app_admin_speaker_index       /admin/speakers                                
  app_admin_speaker_delete      /admin/speakers/{id}/delete                    
  app_admin_speaker_bulk_delete /bulk_delete     
```

---

Generated grid

<img src="/admin_ui_speakers.png" />

---

No filters by default

<img class="w-100" src="/admin_ui_no_filters.png" />

---

Adding a search filter

```php {all|10-14|11|12|13}
// src/Grid/SpeakerGrid.php
// ...

final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            ->addFilter(
                StringFilter::create(name: 'search', fields: ['firstName', 'lastName', 'companyName'])
                    ->setLabel('sylius.ui.search')
            )
            // ...
        ;
    }

    // ...
}

```

---

<img src="/admin_ui_with_filters.png" />

---

Adding a default sorting

```php {all|13}
<?php

// ...

final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addOrderBy('firstName', 'asc')
            // ...
        ;
    }

    // ...
}

```

---
transition: fade
---

Sorted by first name

<img src="/admin_ui_default_sorting2.png" />

---

Sorted by company name

<img src="/admin_ui_sorted_by_company_name2.png" />


---

Adding an image for the speaker avatar

```php {all|5-8|5|6|7}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        // ...
        ->addField(
            TwigField::create(name: 'avatar', template: 'speaker/grid/field/image.html.twig')
                ->setPath('.') // "speaker" instance instead of "speaker.avatar"
        )
        // ...
    ;
}
```

```twig {no|2|4|5}
<!-- templates/speaker/grid/field/image.html.twig -->
{% import '@SyliusBootstrapAdminUi/shared/helper/avatar.html.twig' as avatar %}

{% set avatar_path = data.avatar.path is defined ? vich_uploader_asset(data.avatar) : null %}
{{ avatar.default(avatar_path, 'img-thumbnail') }}
```

```twig{no|all}
<!-- '@SyliusBootstrapAdminUi/shared/helper/avatar.html.twig' -->
{% macro default(img, class) %}
    <!-- ... -->
{% endmacro %}
```

---

<img src="/admin_ui_speaker_avatars.png" />

---

Create a talk entity

```shell
symfony console make:entity Talk
```

| Name        | Type      | Nullable |
|-------------|-----------|----------|
| title       | string    | no       |
| description | text      | yes      |
| speaker     | manyToOne | yes      |

---

Create a talk form type

```php
symfony console make:form TalkType Talk
```

Create a talk grid

```php
symfony console make:grid Talk
```

---

Generated grid

<img src="/admin_ui_talks.png" />

---

Adding the speaker avatar

```php {all|10-13|11|12}
// src/Grid/TalkGrid.php
// ...
final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addField(
                TwigField::create(name: 'avatar', template: 'speaker/grid/field/image.html.twig')
                    ->setPath('speaker') // "talk.speaker"
            )
            // ...
        ;
    }
    // ...
}
```

---

Talks with speaker avatars

<img src="/admin_ui_talks_with_avatars.png" />

---

Adding the speaker full names

```php {all|10-15|11|12|13|14}
// src/Grid/TalkGrid.php
// ...
final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addField(
                StringField::create('speaker')
                    ->setLabel('app.ui.speaker')
                    ->setPath('speaker.fullName') // "talk.speaker.fullName"
                    ->setSortable(true, 'speaker.firstName') // for SQL query
            )
            // ...
        ;
    }
    // ...
}
```

---

Talks with speaker full names

<img src="/admin_ui_talks_with_speaker_full_names.png" />

---

Adding the speaker filter

```php {all|10-15|11-12|13|11,14}
// src/Grid/TalkGrid.php
// ...
final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addFilter(
                // EntityFilter is built with symfony/form EntityType
                EntityFilter::create('speaker', Speaker::class)
                    ->setLabel('app.ui.speaker')
                    ->addFormOption('choice_label',  'fullName')
            )
            // ...
        ;
    }
    // ...
}
```

---

Talks with speaker filter

<img src="/admin_ui_speaker_filter.png" />

---

Talks with speaker filter

<img src="/admin_ui_speaker_filter_result.png" />

---

Adding a link to speaker talks on list of speakers

```php {all|10-24|11-12|13|15-16|17|18|19-21}
// src/Grid/SpeakerGrid.php
// ...
final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addActionGroup(
                // action group allows to configure actions on each speaker row
                ItemActionGroup::create(
                    Action::create(name: 'show_talks', type: 'show')
                        ->setOptions([
                            // Link to talk grid with query params
                            'link' => [
                                'route' => 'app_admin_talk_index',
                                'parameters' => [
                                    'criteria' => [
                                        'speaker' => 'resource.id', // current speaker id
                                    ],
                                ],
                            ],
                        ])
                    ,
                    UpdateAction::create(),
                    DeleteAction::create()
                )
            )
            // ...
        ;
    }
    // ...
}
```

---
transition: fade
---

Link to speaker talks

<img src="/admin_ui_show_talks.png" />

---

Linked to talks of this speaker

<img src="/admin_ui_one_speaker_talks.png" />
