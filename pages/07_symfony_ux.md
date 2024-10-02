---
layout: center
---

# Going further with Symfony UX
Let's use some Symfony UX components

---

Add a speaker autocomplete filter

```php {all|10-21|11|12|13|14|15-17|16|17|20}
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
                Filter::create('speaker', 'ux_autocomplete')
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

Creating a Speaker Autocomplete to use on forms

```php {all|4|5|7|12|13|17-20}
// src/Form/SpeakerAutocompleteType.php
// ...

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

Speaker Autocomplete on talk form type

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

Talk can have multiple speakers

```php {all|10|12|13|14|15}
// src/Form/TalkType.php
// ...

class TalkType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // ...
            ->add('speakers', LiveCollectionType::class, [
                'label' => 'app.ui.speakers',
                'entry_type' => SpeakerAutocompleteType::class,
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
    use HookableLiveComponentTrait;

    #[LiveProp]
    public Talk $initialFormData;

    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(TalkType::class, $this->initialFormData);
    }
}

```

---

```yaml {all|6|7|8|9|10|11|13}
# config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        # ...

        'sylius_admin.talk.create.content':
            form:
                component: 'App\Twig\Component\TalkFormComponent'
                props:
                    form: '@=_context.form'
                    initialFormData: '@=_context.resource'

        'sylius_admin.talk.update.content':
            form:
                component: 'App\Twig\Component\TalkFormComponent'
                props:
                    form: '@=_context.form'
                    initialFormData: '@=_context.resource'

```

---

<img src="/live-collection.png"/>

---
layout: center
---

Two more filters...

---

```php {all|3,14-17|18-25}
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
                DateFilter::create('startsAt')
                    ->setLabel('app.ui.starts_at'),
            )
            ->addFilter(
                SelectFilter::create('track', [
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
