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

```php {all|10|12|13|15-21}
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

```twig {all|1|4-7|9-10|12-14|16-19|21-25}
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

Twig hooks overview

```yaml {all|2|3-4|5-6|7-9|11-12|13-14|15-17|18-20}
## Hook 'index'
'sylius_admin.common.index': 
    sidebar:
        template: '[...]/index/sidebar.html.twig'
    navbar:
        template: '[...]/index/navbar.html.twig'    
    content:
        template: '[...]/index/content.html.twig'
        # this template contains 'content' hook 
      
## hook 'content'        
'sylius_admin.common.index.content':    
    flashes: 
        template: '[...]/index/content/flashes.html.twig'
    header:
        template: '[...]/index/content/header.html.twig'
        # this template contains 'header' hook 
    grid:
        template: '[...]/index/content/grid.html.twig'
        # this template contains 'grid' hook
```                
---

Debugging with profiler

<img src="/admin_ui_index_hooks_with_focus.png"/>

---

Hooking the header
<img src="/focused_hook.png" width="700"/>



```yaml {all|1-6|8-13|2}
## Hook 'header'
'sylius_admin.[book/common].index.content.header':  
    breadcrumbs:
        template: '[...]/header/breadcrumbs.html.twig'
    title_block:
        template: '[...]/header/title_block.html.twig' 
        
## Hook 'title_block'
'sylius_admin.[book/common].index.content.header.title_block':
    title: 
        template: '[...]/header/title_block/title.html.twig'
    actions:
        template: '[...]/header/title_block/actions.html.twig'
```    

---

Hooking templates to add data to the book index template

__Hook__

```yaml {all|4|5|6}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        'sylius_admin.book.index.content.header':
            description:
                template: 'book/index/content/header/description.html.twig'

```

__Template__
```html
<!-- templates/book/index/content/header/description.html.twig -->
<p class="mt-3">
    Aliquam arcu ligula, aliquet vitae malesuada quis, accumsan nec metus. Proin lacinia dolor eu convallis mollis. Phasellus quis laoreet ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vestibulum dolor est, vel tristique sapien sodales eget. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vitae viverra leo, vel consectetur tellus. Sed ipsum risus, pharetra id tincidunt et, ultricies at nisl. Morbi nec ultrices elit, vitae vehicula lectus. Nullam venenatis condimentum dui ut vehicula. Vivamus sit amet pharetra justo. Sed sit amet quam nisi.
</p>
<p>
    Etiam ac justo euismod, luctus urna sit amet, pellentesque risus. Vestibulum mi mi, ultrices quis arcu sed, suscipit efficitur metus. Quisque vitae ipsum arcu. Etiam sagittis mollis lacus eu posuere. Nam ac leo ex. Nam vitae dapibus nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultrices, est at condimentum euismod, ligula tellus hendrerit ex, vel dictum orci augue at magna.
</p>

```

---

<img src="/admin_ui_index_hooks_result.png"/>

---

<img src="/admin_ui_index_hooks_result_debug.png"/>

---

Hooking templates to change logo on the layout

__Hook__

```yaml {all|4|5|6}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        'sylius_admin.common.component.sidebar':
            logo:
                template: 'shared/crud/common/sidebar/logo.html.twig'

```

__Template__

```html {all|2|5|6|7}
<!-- templates/shared/crud/common/sidebar/logo.html.twig -->
{% set dashboard_path = hookable_metadata.context.routing.dashboard_path|default('/admin') %}

<h1 class="navbar-brand">
    <a href="{{ dashboard_path }}" style="text-decoration: none">
        <img src="{{ asset('afup-icon-color.png') }}" alt="AFUP logo" class="navbar-brand-image" />
        AFUP
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
