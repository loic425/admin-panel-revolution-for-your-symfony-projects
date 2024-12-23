---
layout: center
---

# Conclusion

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
- Resource management is DDD architecture ready
    - Resource can be detached from the Doctrine entity
    - Use your query bus on providers
    - Use your command bus on processors
- Installable on existing projects  

</v-clicks>

---

## TODO

<v-clicks>

- Writing documentation
- Adding Doctrine orm 3 support
- Adding UX autocomplete grid filter (only implemented in the Demo application)
- Using these new packages on Sylius E-commerce 
  - TwigHooks ✔️
  - TwigExtra ✔️
  - AdminUi ❌
  - BootstrapAdminUi ❌
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
  "sylius/admin-ui" \
  "sylius/bootstrap-admin-ui" \
  "sylius/grid-bundle" "^1.13" \
  "sylius/resource-bundle": "^1.12" \
  "sylius/twig-extra" \
  "sylius/twig-hooks" \
  "sylius/ui-translations"
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

Import Tom Select default css

```shell
symfony console importmap:require tom-select/dist/css/tom-select.default.css
```

---

<img src="/enjoy.png"/>

---

<img src="/admin_login.png"/>


---
layout: center
---

Now it's your turn...

---
layout: center
---

Demo of the real use case project:

https://github.com/loic425/sylius-stack-demo
<div align="center">
<img src="/demo_link.png" width="250"/>
</div>
