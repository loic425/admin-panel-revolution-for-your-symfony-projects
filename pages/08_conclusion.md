---
layout: center
---

Now it's time to conclude

---
layout: image-right
image: /profiler.png
---

<v-clicks>

- Symfony 7.1 support
- PHP 8.3 support
- Fewer dependencies on third party packages
- No dependencies on Sylius E-commerce packages
- DDD architecture ready
    - Resource detached from the Doctrine entity
    - Query bus on providers
    - Command bus on processors
- Installable on existing projects  

</v-clicks>

---

## TODO

<v-clicks>

- Writing documentation
- Adding Doctrine orm 3 support
- Adding UX autocomplete grid filter
- Using these packages on Monofony
- Using these packages on Sylius E-commerce
- Grid with UX Live Component

</v-clicks>

---

## Install It

From scratch, install a Symfony skeleton

```shell
symfony new --webapp [application_name]
```

Install all the packages (Soon...)

```shell
composer require sylius/admin-panel-pack
```

---

Install all the packages (For now)  

```shell
composer require \
  "doctrine/doctrine-bundle" "^2.12" \
  "doctrine/orm" "^2.0" \
  "sylius/admin-ui" "^0.4" \
  "sylius/bootstrap-admin-ui" "^0.4" \
  "sylius/grid-bundle" "^1.13" \
  "sylius/resource-bundle": "^1.12" \
  "sylius/twig-extra" "^0.4" \
  "sylius/twig-hooks" "^0.4" \
  "sylius/ui-translations" "^0.4"
```

Do not forget to accept contrib recipes

```shell {4}
    Do you want to execute this recipe?
    [y] Yes
    [n] No
    [a] Yes for all packages, only for the current installation session
    [p] Yes permanently, never ask again for this project
    (defaults to n): a
```

---

<img src="/enjoy.png"/>

---

<img src="/admin_login.png"/>


---
layout: center
---

Now it's your turn...
