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

```php {all|4|5|6|8|13|14|18-21}
// src/Form/SpeakerAutocompleteType.php
// ...

#[AsEntityAutocompleteField(
    alias: 'app_admin_speaker',
    route: 'sylius_admin_entity_autocomplete',
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

```php {all|11}
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
