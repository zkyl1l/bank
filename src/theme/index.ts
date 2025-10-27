'use client'

import {createTheme, Select, Tabs} from "@mantine/core";
import s from "./mantine.module.css"

export const theme = createTheme({
    components: {
        Select: Select.extend({
            classNames: {
                root: s.select__root,
                wrapper: s.select__wrapper,
                input: s.select__input,
                option: s.select__option,
            }
        }),
        NumberInput: Select.extend({
            classNames: {
                root: s.select__root,
                wrapper: s.number__wrapper,
                input: s.number__input,
            }
        }),
        Tabs: Tabs.extend({
            classNames:{
                root: s.tabs__root,
                list: s.tabs__list,
                panel: s.tabs__panel,
                tab: s.tabs__tab,
            }
        }),
    }
});