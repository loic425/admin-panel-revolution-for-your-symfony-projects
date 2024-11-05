---
layout: center
---

# Going further with Symfony UX
Let's use some Symfony UX components

---

Creating a Speaker Autocomplete to use on forms

```php {all|4,7|15|16|22,5}
// src/Form/SpeakerAutocompleteType.php
// ...

use Symfony\UX\Autocomplete\Form\AsEntityAutocompleteField;
use Symfony\UX\Autocomplete\Form\BaseEntityAutocompleteType;

#[AsEntityAutocompleteField(
    alias: 'app_admin_speaker',
)]
final class SpeakerAutocompleteType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'class' => Speaker::class,
            'choice_label' => 'fullName',
        ]);
    }

    public function getParent(): string
    {
        return BaseEntityAutocompleteType::class;
    }
}

```

---

Use Speaker Autocomplete on talk form type

```php {all|10}
// src/Form/TalkType.php
// ...

class TalkType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('speaker', SpeakerAutocompleteType::class)
            ->add('description')
        ;
    }

    // ...
}

```

---
transition: fade
---

Speaker Autocomplete on talk form type

<img src="/talk_form_type.png" />

---

Speaker Autocomplete on talk form type

<img src="/form_type_with_ux_autocomplete.png" />

---

Add a speaker autocomplete filter

```php {all|10-21|11|12|13|14|15-17|16|17}
// src/Grid/SpeakerGrid.php
// ...
final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addFilter(
                Filter::create(name: 'speaker', type: 'ux_autocomplete')
                    ->setLabel('app.ui.speaker')
                    ->setFormOptions([
                        'multiple' => false,
                        'extra_options' => [
                            'class' => Speaker::class,
                            'choice_label' => 'fullName',
                        ],
                    ])
                    ->setOptions(['fields' => ['speaker.id']])
            )
            // ...
        ;
    }
    // ...
}
```

---

Speaker filter with autocompletion

<img src="/filter_with_ux_autocomplete.png" />

---

Talk can have multiple speakers

<v-clicks>

* speakers with ManyToMany on talk entity
* we use a form collection to try Twig Live Components
* add button to add a new speaker form field
* remove button to remove an existing form field

</v-clicks>

---

```php {all|9-10|12|13|14|15}
// src/Form/TalkType.php
// ...

class TalkType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // "symfony/form" CollectionType using LiveComponent
            ->add('speakers', LiveCollectionType::class, [
                'label' => 'app.ui.speakers',
                'entry_type' => SpeakerAutocompleteType::class, // reuse the speaker autocomplete
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ])
            // ...
        ;
    }

    // ...
}

```

---

```php {all|4,9|7,12|6,13|3,14|16-17|19-22}
// src/Twig/Component/TalkFormComponent.php
// ...
use Sylius\TwigHooks\LiveComponent\HookableLiveComponentTrait;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\LiveCollectionTrait;

#[AsLiveComponent(template: '@SyliusBootstrapAdminUi/shared/crud/common/content/form.html.twig')]
class TalkFormComponent extends AbstractController
{
    use LiveCollectionTrait;
    use DefaultActionTrait;
    use HookableLiveComponentTrait; // for Sylius Twig Hooks

    #[LiveProp]
    public Talk $resource;

    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(TalkType::class, $this->resource);
    }
}

```

---

```yaml {all|6|7|8|9|10|11|13}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        # ...

        'sylius_admin.talk.create.content':
            form:
                component: 'App\Twig\Component\TalkFormComponent'
                props:
                    form: '@=_context.form'
                    resource: '@=_context.resource'

        'sylius_admin.talk.update.content':
            form:
                component: 'App\Twig\Component\TalkFormComponent'
                props:
                    form: '@=_context.form'
                    resource: '@=_context.resource'

```

---

<video width="800" controls autoplay>
  <source src="/live_collection.webm" type="video/mp4">
</video>

---
layout: center
---

Two more filters...

---

```php {all|3,14-17|18-26}
// src/Grid/TalkGrid.php
// ...
use Sylius\Bundle\GridBundle\Builder\Filter\DateFilter;
use Sylius\Bundle\GridBundle\Builder\Filter\EntityFilter;

final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addFilter(
                DateFilter::create('startsAt') // for the talk starting date
                    ->setLabel('app.ui.starts_at'),
            )
            ->addFilter(
                // "symfony/form" ChoiceType
                SelectFilter::create('track', [ // for the talk tracks
                    'app.ui.biz' => Track::BIZ->value,
                    'app.ui.tech_one' => Track::TECH_ONE->value,
                    'app.ui.tech_two' => Track::TECH_TWO->value,
                ])
                    ->setLabel('app.ui.track'),
            )
            // ...
        ;
    }

    // ...
}

```

---

<img src="/last-filters.png"/>
