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
layout: center
class: text-center
---

<img class="w-40" src="https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg">
Twig Hooks

---

Twig hooks overview

```mermaid
flowchart LR
    Template([Twig template]) --> Hook
    
    Hook{Hook} --> Template1([Template])
    Hook --> Template2([Template])
    Hook --> Template3([Template])

    Template1 --> SecondHook{Hook}

    SecondHook --> Template4([Template])
    SecondHook --> TwigComponent([TwigComponent])
    SecondHook --> LiveComponent([LiveComponent])
```

---

Twig hooks overview for index pages

```mermaid
flowchart LR
    Template(index.html.twig) --> Hook2{sylius_admin.common.index}
    
    Hook2 --> Sidebar([index/sidebar.html.twig])
    Hook2--> Navbar([index/navbar.html.twig])
    Hook2 --> Content([index/content.html.twig])

    Content --> Hook3{sylius_admin.common.index.content}

    Hook3 --> Flashes(index/content/flashes.html.twig)
    Hook3 --> Header(index/content/header.html.twig)
    Hook3 --> Grid(index/content/grid.html.twig)
```

---

Generic index template

```twig {all|1|4-7|9-10|12-14|16}
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|[...]),
    'sylius_admin.common'
] %}

<!-- Creating the header (eg: app.ui.books) -->
{% set header = [...]|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}

<!-- Browser page title (eg: Books | Sylius) -->
{% block title %}{{ header|trans }} {{ parent() }}{% endblock %}

{% block body %}
    {% hook 'index' with { _prefixes: prefixes, [...] } %}
{% endblock %}
<!-- ... -->
```
 
---

Debugging with profiler

<img src="/admin_ui_index_hooks_with_focus.png"/>

---

Hooking the header
<img src="/focused_hook.png" width="700"/>



```yaml {all|3-4|5-6|8-10}
## Hook 'header'
'sylius_admin.common.index.content.header':  
    breadcrumbs:
        template: '[...]/header/breadcrumbs.html.twig'
    title_block:
        template: '[...]/header/title_block.html.twig'

'sylius_admin.book.index.content.header':
    description:
        template: 'book/index/content/header/description.html.twig'
```    

---

Hooking templates to add data to the book index template

__Hook__

```yaml {6}
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

```yaml {all|4|5|6-7}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        'sylius_admin.common.component.sidebar':
            logo:
                #template: '@SyliusBootstrapAdminUi/security/common/logo.html.twig'
                template: 'shared/crud/common/sidebar/logo.html.twig'

```

__Template__

```html {all|2|5|6|7}
<!-- templates/shared/crud/common/sidebar/logo.html.twig -->
{% set dashboard_path = [...]|default('/admin') %}

<h1 class="navbar-brand">
    <a href="{{ dashboard_path }}" style="text-decoration: none">
        <img src="{{ asset('afup-icon-color.png') }}" alt="AFUP logo" class="navbar-brand-image" />
        AFUP
    </a>
</h1>

```

---

<img src="/admin_ui_logo_hooks_result.png" />

