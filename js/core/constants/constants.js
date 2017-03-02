export const CONFIG = {
    LANG: 'fr-FR'
}
// \b\w+(ces|çons|cez|cent|çais|çait|cions|ciez|çaient|cerai|ceras|cera|cerons|cerez|ceront|e|es|ons|ez|ent|ais|ait|aient|erai|eras|era|erons|erez|eront|ece|èce|eces|èces|eçons|ecez|ecent|ècent|eçais|eçait|ecions|eciez|eçaient|ecerai|ècerai|eceras|èceras|ecera|ècera|ecerons|ècerons|ecerez|ècerez|eceront|èceront|ge|ges|geons|gez|gent|geais|geait|gions|giez|geaient|gerai|geras|gera|gerons|gerez|geront|ie|ye|ies|yes|yons|yez|ient|yent|yais|yait|yions|yiez|yaient|ierai|yerai|ieras|yeras|iera|yera|ierons|yerons|ierez|yerez|ieront|yeront|elle|elles|elons|elez|ellent|elais|elait|elions|eliez|elaient|ellerai|elleras|ellera|ellerons|ellerez|elleront|èle|èles|èlent|èlerai|èleras|èlera|èlerons|èlerez|èleront|ette|ettes|etons|etez|ettent|etais|etait|etions|etiez|etaient|etterai|etteras|ettera|etterons|etterez|etteront|ète|ètes|ètent|èterai|èteras|ètera|èterons|èterez|èteront|étons|étez|étais|était|étions|étiez|étaient|ème|èmes|emons|emez|èment|emais|emait|emions|emiez|emaient|èmerai|èmeras|èmera|èmerons|èmerez|èmeront|ègue|ègues|éguons|éguez|èguent|éguais|éguait|éguions|éguiez|éguaient|èguerai|ègueras|èguera|èguerons|èguerez|ègueront|èque|èques|équons|équez|èquent|équais|équait|équions|équiez|équaient|èquerai|èqueras|èquera|èquerons|èquerez|èqueront|élons|élez|élais|élait|élions|éliez|élaient|élerai|éleras|élera|élerons|élerez|éleront|ètre|ètres|étrons|étrez|ètrent|étrais|étrait|étrions|étriez|étraient|étrerai|ètrerai|étreras|ètreras|étrera|ètrera|étrerons|ètrerons|étrerez|ètrerez|étreront|ètreront|ègle|ègles|églons|églez|èglent|églais|églait|églions|égliez|églaient|églerai|èglerai|égleras|ègleras|églera|èglera|églerons|èglerons|églerez|èglerez|égleront|ègleront|ègne|ègnes|égnons|égnez|ègnent|égnais|égnait|égnions|égniez|égnaient|égnerai|ègnerai|égneras|ègneras|égnera|ègnera|égnerons|ègnerons|égnerez|ègnerez|égneront|ègneront|èbre|èbres|ébrons|ébrez|èbrent|ébrais|ébrait|ébrions|ébriez|ébraient|ébrerai|èbrerai|ébreras|èbreras|ébrera|èbrera|ébrerons|èbrerons|ébrerez|èbrerez|ébreront|èbreront|ègre|ègres|égrons|égrez|ègrent|égrais|égrait|égrions|égriez|égraient|égrerai|ègrerai|égreras|ègreras|égrera|ègrera|égrerons|ègrerons|égrerez|ègrerez|égreront|ègreront|éterai|éteras|étera|éterons|éterez|éteront|ène|ènes|énons|énez|ènent|énais|énait|énions|éniez|énaient|énerai|ènerai|éneras|èneras|énera|ènera|énerons|ènerons|énerez|ènerez|éneront|èneront|enons|enez|enais|enait|enions|eniez|enaient|ève|èves|evons|evez)(?!\w+)
// \b(?:(?:je|tu|il(?:|s)|[nv]ous)(?:\s[nv]ous|\s[tm]e)?(?:\sne)?\s(?:t')?)(\w[A-zÀ-ÿ]+)(?!\w+)
export const SPEAK = {
    ACTION_VERB: /\b(\w[A-zÀ-ÿ]+)(?:(?:-(?:[mt]oi|[nv]ous))|\sleur)(?!\w+)/gi,
    VERB: /\b(?:(?:je|tu|ils?|[nv]ous)(?:\s(?:[nv]ous|[tm]e))?(?:\sne)?\s(?:[tm]'|(?:[nv]ous|[ts]e)\s)?)([\wA-zÀ-ÿ]+)(?!\w+)/gi,
    TUTOIEMENT: /\b(-?t(?:[ue]|oi)|l[ea]\stien(?:ne)?)(?!\w+)/gi,
    VOUVOIEMENT: /\b((?:-?vous\s?){1,2}|(?:l[ea]\s)v[oôÔ]tre)(?!\w+)|(\w+ez)/gi,
    QUESTION: /(qu(?:i|and|el(?:le)?)|où|com(?:bien|ment)|(?:pour(?:\s)?)?quoi|\w+-(?:je|tu|vous|ce|on|t-il))/gi
}

export const REGEXP_COLLECTION = {
    NAMED_PARAMETER: /(\?)?:(\w+)/gi
}

export const REGEXP_SYMBOLES = {
    ALTERNATION: '|'
}