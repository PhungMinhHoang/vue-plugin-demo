async function getContentFromPath(path, modules) {
  content = await modules[path]();
  return content.default;
}

let content;
let language;
const messages = {};

// // get key translate common
// const commonLocales = import.meta.glob("./*");
// for (const path in commonLocales) {
//   content = await getContentFromPath(path, commonLocales);
//   language = path.replace(/\.\/|\.js/g, "");
//   messages[language] = content;
// }

// // get and merge key translate from plugins
// const pluginsLocales = await import.meta.glob("../plugins/**/i18n/**");

// for (const path in pluginsLocales) {
//   content = await getContentFromPath(path, pluginsLocales);

//   const array = path.split("/");
//   const pluginName = array[2];
//   language = array[4].replace(".js", "");

//   if (!messages[language][pluginName]) {
//     messages[language][pluginName] = content;
//   } else {
//     Object.assign(messages[language][pluginName], content);
//   }
// }

export default messages;
