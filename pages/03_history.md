# Sylius technical history

Back in 2013 - Before Bootstrap 3 migration

<!-- https://github.com/Sylius/Sylius/pull/368 -->

<img class="w-200" src="/bootstrap2-users.jpeg"/>

---

Back in 2013 - After Bootstrap 3 migration

<!-- https://github.com/Sylius/Sylius/pull/368 -->

<img class="w-200" src="/bootstrap3-users.jpeg"/>

---

Back in 2016 - Grids

<img class="w-150" src="/new_grids.png"/>


---
layout: quote
---

Paweł Jędrzejewski wrote

<v-clicks>

* Standalone Grid component, decoupled from persistence with a system of drivers.
* Standalone SyliusGridBundle, decoupled from SyliusResourceBundle.
* SyliusResourceBundle does not force you to use GridBundle.
* Doctrine ORM and Doctrine DBAL drivers for SyliusGridBundle, later I plan to have ElasticSearchDriver.
* Super easy to introduce new drivers, filters, columns and customize rendering of every single part;

</v-clicks>

---
layout: cover
---

1 month later...

---

Back in 2016 - Semantic UI & Generic templates 

<img class="w-150" src="/generic_templates.png"/>

---
layout: quote
---

Paweł Jędrzejewski wrote

I started preparing generic __CRUD templates with AdminLTE__ and it is far from perfect. 
The css/html is not that nice and __Bootstrap is getting slowly out-dated__. 
I discovered http://semantic-ui.com/, which provides tons of components out of the box that we can find useful both for admin and shop interface. 
Just have a look around the docs. 
Also it is actually much easier to learn.
__These components give us a lot of power both for Sylius itself as well as for customizing the admin/shop__.

---

```twig {all|2|5-6|8-9|13-14|16-25|18-19|21}
<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/create.html.twig -->
{% extends 'SyliusAdminBundle::layout.html.twig' %}
<!-- ... -->

<!-- Creating the header (eg: app.ui.new_book) -->
{% set header = [...]|default(metadata.applicationName~'.ui.new_'~metadata.name) %}

<!-- Browser page title (eg: Sylius | New book) -->
{% block title %}{{ parent() }} {{ header|trans }}{% endblock %}
<!-- ... -->

{% block content %}
<!-- Displaying the header in h1 (eg: New book) -->
{{ headers.default(header|trans, [...]) }}

{{ form_start(form, [...]) }}
    <div class="ui segment">
        {% if [...]templates.form is defined %}
            {% include [...]templates.form %}
        {% else %}
            {{ form_widget(form) }}
        {% endif %}
        {% include 'SyliusUiBundle:Form:_create.html.twig' %}
    </div>
{{ form_end(form) }}
{% endblock %}
```

---

```twig {all|2|5-6|8-9|13-14|16-17|20-22}
<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/index.html.twig -->
{% extends 'SyliusAdminBundle::layout.html.twig' %}
<!-- ... -->

<!-- Creating the header (eg: app.ui.books) -->
{% set header = [...]|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}

<!-- Browser page title (eg: Sylius | Books) -->
{% block title %}{{ parent() }} {{ header|trans }}{% endblock %}

{% block content %}
    <!-- ... -->
        <!-- Displaying the header in h1 (eg: Books) -->
        {{ headers.default(header|trans, [...]) }}
    <!-- ... -->
        <!-- Button link to adding new item page -->
        {{ buttons.create(path(configuration.getRouteName('create'))) }}

<!-- ... -->
{{ pagination.render(resources) }}
{{ list.full(resources, configuration) }}
{{ pagination.render(resources) }}
<!-- ... -->
{% endblock %}
```


---

Back in 2019 - Templates events

<img class="w-150" src="/template_events.png"/>

---
layout: quote
---

Kamil Kokot wrote

This PR aims to __replace our current template events system using Sonata Block bundle__ and improve both the __developer experience__ using it and __Sylius extendability__, especially in the light of __Sylius Store__ which has been recently opened.
