# History

Back in 2013 - Before Bootstrap 3 migration

<!-- https://github.com/Sylius/Sylius/pull/368 -->

<img class="w-200" src="/bootstrap2-users.jpeg"/>

---

Back in 2013 - Before Bootstrap 3 migration

<!-- https://github.com/Sylius/Sylius/pull/368 -->

<img class="w-200" src="/bootstrap2-products.jpeg"/>

---

Back in 2013 - After Bootstrap 3 migration

<!-- https://github.com/Sylius/Sylius/pull/368 -->

<img class="w-200" src="/bootstrap3-users.jpeg"/>

---

Back in 2013 - After Bootstrap 3 migration

<!-- https://github.com/Sylius/Sylius/pull/368 -->

<img class="w-200" src="/bootstrap3-products.jpeg"/>

---

Back in 2013 - After Bootstrap 3 migration

<!-- https://github.com/Sylius/Sylius/pull/368 -->

<img class="w-200" src="/bootstrap3-login.jpeg"/>

---

Back in 2016 - Grids

<img class="w-150" src="/new_grids.png"/>


---

Back in 2016 - Grid definition

```yaml
sylius_grid:
    grids:
        sylius_admin_tax_category:
            driver:
                name: doctrine/orm
                options:
                    class: '%sylius.model.tax_category.class%'
            sorting:
                name: asc
            fields:
                code:
                    type: string
                    label: sylius.ui.code
                nameAndDescription:
                    type: twig
                    label: sylius.ui.name
                    path: .
                    options:
                        template: SyliusAdminBundle:Grid/Field:nameAndDescription.html.twig
            filters:
                name:
                    type: string
                    label: sylius.ui.name
                code:
                    type: string
                    label: sylius.ui.code
```

---

Back in 2016 - Grid definition

```yaml
sylius_grid:
    grids:
        sylius_admin_tax_category:
            # ...
            actions:
                main:
                    create:
                        type: create
                item:
                    update:
                        type: update
                    delete:
                        type: delete
```

---

Back in 2016 - Route with grid

```yaml
sylius_admin_tax_category:
    resource: |
        alias: sylius.tax_category
        section: admin
        templates: SyliusAdminBundle:Crud
        except: ['show']
        redirect: update
        grid: sylius_admin_tax_category
        vars:
          all:
              subheader: sylius.ui.manage_taxation_of_your_products
              templates:
                  form: SyliusAdminBundle:TaxCategory:_form.html.twig
          index:
              icon: tags
    type: sylius.resource
```

---

Back in 2016 - Route with grid (on API)

```yaml
sylius_api_tax_category:
    resource: '@SyliusApiBundle/Resources/config/routing/tax_category.yml'
    prefix: /tax-categories
    resource: |
        alias: sylius.tax_category
        section: api
        grid: sylius_admin_tax_category
    type: sylius.resource_api
```

---
layout: cover
---

1 month later...

---

Back in 2016 - Semantic UI & Generic templates 

<img class="w-150" src="/generic_templates.png"/>

---

```twig
<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/create.html.twig -->
{% extends 'SyliusAdminBundle::layout.html.twig' %}

{% import 'SyliusUiBundle:Macro:headers.html.twig' as headers %}
{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.new_'~metadata.name) %}

{% block title %}{{ parent() }} {{ header|trans }}{% endblock %}
{% form_theme form 'SyliusUiBundle:Form:theme.html.twig' %}

{% block content %}
{{ headers.default(header|trans, configuration.vars.icon|default('plus'), configuration.vars.subheader|default(null)|trans) }}

{{ form_start(form, {'action': path(configuration.getRouteName('create')), 'attr': {'class': 'ui form', 'novalidate': 'novalidate'}}) }}
    <div class="ui segment">
        {% if configuration.vars.templates.form is defined %}
            {% include configuration.vars.templates.form %}
        {% else %}
            {{ form_widget(form) }}
        {% endif %}
        {% include 'SyliusUiBundle:Form:_create.html.twig' %}
    </div>
{{ form_end(form) }}
{% endblock %}
```

---

```twig
<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/index.html.twig -->
{% extends 'SyliusAdminBundle::layout.html.twig' %}

{% import configuration.vars.templates.list as list %}
<!-- ... -->
{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ parent() }} {{ header|trans }}{% endblock %}

{% block content %}
<div class="ui stackable two column grid">
    <div class="column">
        {{ headers.default(header|trans, configuration.vars.icon|default('list'), configuration.vars.subheader|default(null)|trans) }}
    </div>
    <div class="middle aligned column">
        <div class="ui right floated buttons">
            {{ buttons.create(path(configuration.getRouteName('create'))) }}
        </div>
    </div>
</div>

<div class="ui segment">
{{ pagination.render(resources) }}
{{ list.full(resources, configuration) }}
{{ pagination.render(resources) }}
</div>
{% endblock %}
```


---

Back in 2019 - Templates events

<img class="w-150" src="/template_events.png"/>
