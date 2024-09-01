---
layout: center
---
<div align="center">

# Sylius  {Stack} - Nowadays

To The Rescue

<img align="center" src="https://i.giphy.com/6IanN6Nqj0JFK.webp"/>

</div>

---

## Admin UI

<img src="/admin_ui_grids.png"/>

---

Searching menu items in sidebar

<img src="/admin_ui_search.png"/>

---

Filtering grid data

<img src="/admin_ui_filters.png"/>

---

Deleting grid item

<img src="/admin_ui_delete.png"/>

---

Deleting multiple grid items

<img src="/admin_ui_bulk_delete.png"/>

---

Sorting grid data

<img src="/admin_ui_sorting.png"/>

---

Paginating grid data

<img src="/admin_ui_pagination.png"/>

---

Creating new item

<img src="/admin_ui_create.png"/>

---

Editing existing item

<img src="/admin_ui_update.png"/>

---

Configure your resource

```php
namespace App\Entity;

use App\Grid\BookGrid;
use App\Repository\BookRepository;
use Sylius\Component\Resource\Model\ResourceInterface;
use Sylius\Resource\Metadata\AsResource;
// ...

#[ORM\Entity(repositoryClass: BookRepository::class)]
#[AsResource(
    section: 'admin',
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    pluralName: 'library',
    operations: [
        new Create(),
        new Update(),
        new Index(grid: BookGrid::class),
        new Delete(),
        new BulkDelete(),
    ],
)]
class Book implements ResourceInterface
{
    // ...
}
```

---

Generic index template

```twig
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|replace({'%resource_name%': resource_name|default(metadata.name)}),
    'sylius_admin.common'
] %}

{% set header = vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ header|trans }} {{ parent() }}{% endblock %}

{% block content %}
    {% hook 'index' with { _prefixes: prefixes, metadata, resources } %}
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {% hook 'index#stylesheets' with { _prefixes: prefixes } %}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {% hook 'index#javascripts' with { _prefixes: prefixes } %}
{% endblock %}
```

---

<img src="/admin_ui_index_hooks.png"/>

---

Hooking templates to add data to the book index template

__Hook__

```yaml
## config/packages/twig_hooks.yaml
twig_hooks:
    hooks:
        'sylius_admin.book.index.content.header':
            description:
                template: 'book/index/content/header/description.html.twig'

```

__Template__
```html
<!-- templates/book/index/content/header/description.html.twig -->
<p>
    Aliquam arcu ligula, aliquet vitae malesuada quis, accumsan nec metus. Proin lacinia dolor eu convallis mollis. Phasellus quis laoreet ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vestibulum dolor est, vel tristique sapien sodales eget. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vitae viverra leo, vel consectetur tellus. Sed ipsum risus, pharetra id tincidunt et, ultricies at nisl. Morbi nec ultrices elit, vitae vehicula lectus. Nullam venenatis condimentum dui ut vehicula. Vivamus sit amet pharetra justo. Sed sit amet quam nisi.
</p>
<p>
Etiam ac justo euismod, luctus urna sit amet, pellentesque risus. Vestibulum mi mi, ultrices quis arcu sed, suscipit efficitur metus. Quisque vitae ipsum arcu. Etiam sagittis mollis lacus eu posuere. Nam ac leo ex. Nam vitae dapibus nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultrices, est at condimentum euismod, ligula tellus hendrerit ex, vel dictum orci augue at magna.
</p>

```

---

<img src="/admin_ui_index_hooks_result.png"/>

---

Hooking templates to change logo on the layout

__Hook__

```yaml
## config/packages/twig_hooks.yaml
twig_hooks:
    hooks:
        'sylius_admin.common.component.sidebar':
            logo:
                template: 'shared/crud/common/sidebar/logo.html.twig'

```

__Template__

```html
<!-- templates/shared/crud/common/sidebar/logo.html.twig -->
{% set dashboard_path = hookable_metadata.context.routing.dashboard_path|default('/admin') %}

<h1 class="navbar-brand">
    <a href="{{ dashboard_path }}" style="text-decoration: none">
        <img src="{{ asset('afup-rennes_logo.png') }}" alt="AFUP Rennes" class="navbar-brand-image" />
        AFUP Rennes
    </a>
</h1>


```

---

<img src="/admin_ui_logo_hooks_result.png" />

---

Generic create template

```twig
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|replace({'%resource_name%': resource_name|default(metadata.name)}),
    'sylius_admin.common'
] %}

{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ header|trans }} | {{ parent() }}{% endblock %}

{% block content %}
    {% hook 'create' with { _prefixes: prefixes, resource, metadata, configuration, form } %}
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {% hook 'create#stylesheets' with { _prefixes: prefixes } %}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {% hook 'create#javascripts' with { _prefixes: prefixes } %}
{% endblock %}

```

---

Generic update template

```twig
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|replace({'%resource_name%': resource_name|default(metadata.name)}),
    'sylius_admin.common'
] %}

{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ header|trans }} | {{ parent() }}{% endblock %}

{% block content %}
    {% hook 'update' with { _prefixes: prefixes, resource, metadata, configuration, form } %}
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {% hook 'update#stylesheets' with { _prefixes: prefixes } %}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {% hook 'update#javascripts' with { _prefixes: prefixes } %}
{% endblock %}

```

---
layout: center
---

Let's create an AFUP admin panel

---

Create a speaker entity
```shell
symfony console make:entity Speaker
```

- firstName
- lastName
- companyName
- avatar

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

```php
<?php
// src/Grid/SpeakerGrid.php

namespace App\Grid;

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

- title
- description
- speaker

Create a talk form type
```php
symfony console make:form TalkType Talk
```

Create a talk grid
```php
symfony console make:grid Talk
```
