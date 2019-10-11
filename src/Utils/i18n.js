import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";

import en from "../translations/en";
import fr from "../translations/fr";
import ar from "../translations/ar";

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
  console.log("locale",    I18n.locale )
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  fr,
  ar
};

export default I18n;