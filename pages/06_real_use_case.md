---
layout: center
---

# Real use case
Let's create an AFUP admin panel

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

Create a speaker form type
```php
symfony console make:form SpeakerType Speaker
```

Create a speaker grid
```php
symfony console make:grid Speaker
```

---

Declare entity as a Sylius resource
& add your basic operations

```php {all|2|3|4|5|6|7-13|8|9|10|11|12|15}
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
                StringFilter::create('search', ['firstName', 'lastName', 'companyName'])
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

```php {all|17|16-17}
<?php

// ...

final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            ->addFilter(
                StringFilter::create('search', ['firstName', 'lastName', 'companyName'])
                    ->setLabel('sylius.ui.search')
            )
            // Currently, sorting doesn't work if there is no default sorting
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

<img src="/admin_ui_default_sorting.png" />

---

Sorted by company name

<img src="/admin_ui_sorted_by_company_name.png" />


---

Adding an image for the speaker avatar

```php {all|6-9|6|7|8}
// ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addField(
                TwigField::create('avatar', 'speaker/grid/field/image.html.twig')
                    ->setPath('.')
            )
            // ...
        ;
    }
// ...

```

```twig {all|2|4|5}
<!-- templates/speaker/grid/field/image.html.twig -->
{% import '@SyliusBootstrapTheme/shared/helper/avatar.html.twig' as avatar %}

{% set avatar_path = data.avatar.path is defined ? vich_uploader_asset(data.avatar) : null %}
{{ avatar.default(avatar_path, 'img-thumbnail') }}
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
                TwigField::create('avatar', 'speaker/grid/field/image.html.twig')
                    ->setPath('speaker')
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
                    ->setPath('speaker.fullName')
                    ->setSortable(true, 'speaker.firstName')
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

```php {all|10-14|11|12|13}
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

```php {all|10-24|11|12|13|14|15|16|17|18-21|20}
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
                ItemActionGroup::create(
                    Action::create('show_talks', 'show')
                        ->setIcon('list_letters')
                        ->setLabel('app.ui.show_talks')
                        ->setOptions([
                            'link' => [
                                'route' => 'app_admin_talk_index',
                                'parameters' => [
                                    'criteria' => [
                                        'speaker' => 'resource.id',
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
