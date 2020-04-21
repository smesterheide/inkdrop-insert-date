# Deprecated

This plugin is deprecated in favor of https://github.com/inkdropapp/inkdrop-insert-date

# inkdrop-insert-date

A plugin for [Inkdrop](https://www.inkdrop.info/) that allows you to quickly insert the current date and time into your notes. Uses [Moment.js](https://momentjs.com/) for formatting and localization.

## Install

```sh
ipm install insert-date
```

## Usage

Just right-click in the editor to open the context menu and select `Insert date`.

Alternatively you can add a keybinding to your `keymap.cson` file like so:

```js
{
  "body": {
    "ctrl-alt-d": "insert-date:toggle"
  }
}
```


## Settings
Please refer to Moment.js for all available [displaying options](https://momentjs.com/docs/#/displaying/) and [supported locales](https://github.com/moment/moment/tree/2.22.1/locale).

### Format

Here are some common options you can choose from:

* `MMMM Do YYYY, h:mm:ss a`: April 22nd 2016, 5:14:58 am
* `LT`: 5:14 AM
* `LTS`: 5:14:58 AM
* `L`: 04/22/2016
* `l`: 4/22/2016
* `LL`: April 22, 2016
* `ll`: Apr 22, 2016
* `LLL`: April 22, 2016 5:14 AM
* `lll`: Apr 22, 2016 5:14 AM
* __`LLLL`: Friday, April 22, 2016 5:14 AM (default)__
* `llll`: Fri, Apr 22, 2016 5:14 AM


### Locale

* __`en`: Friday, April 22, 2016 5:14 AM (default)__
* `ja`: 2016年4月22日 金曜日 05:14
* `de`: Freitag, 22. April 2016 05:14
