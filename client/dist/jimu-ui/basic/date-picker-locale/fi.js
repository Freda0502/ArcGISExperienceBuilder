System.register([],(function(t){return{execute:function(){t(function(t){var e={};function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=975)}({3:function(t,e,a){"use strict";function n(t){return function(e,a){var n,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&t.formattingValues){var u=t.defaultFormattingWidth||t.defaultWidth,r=i.width?String(i.width):u;n=t.formattingValues[r]||t.formattingValues[u]}else{var o=t.defaultWidth,l=i.width?String(i.width):t.defaultWidth;n=t.values[l]||t.values[o]}return n[t.argumentCallback?t.argumentCallback(e):e]}}a.d(e,"a",(function(){return n}))},4:function(t,e,a){"use strict";function n(t){return function(e,a){var n=String(e),i=a||{},u=i.width,r=u&&t.matchPatterns[u]||t.matchPatterns[t.defaultMatchWidth],o=n.match(r);if(!o)return null;var l,s=o[0],k=u&&t.parsePatterns[u]||t.parsePatterns[t.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(k)?function(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}(k,(function(t){return t.test(s)})):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}(k,(function(t){return t.test(s)})),l=t.valueCallback?t.valueCallback(l):l,{value:l=i.valueCallback?i.valueCallback(l):l,rest:n.slice(s.length)}}}a.d(e,"a",(function(){return n}))},5:function(t,e,a){"use strict";function n(t){return function(e){var a=e||{},n=a.width?String(a.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}a.d(e,"a",(function(){return n}))},8:function(t,e,a){"use strict";function n(t){return function(e,a){var n=String(e),i=a||{},u=n.match(t.matchPattern);if(!u)return null;var r=u[0],o=n.match(t.parsePattern);if(!o)return null;var l=t.valueCallback?t.valueCallback(o[0]):o[0];return{value:l=i.valueCallback?i.valueCallback(l):l,rest:n.slice(r.length)}}}a.d(e,"a",(function(){return n}))},975:function(t,e,a){"use strict";function n(t){return t.replace(/sekuntia?/,"sekunnin")}function i(t){return t.replace(/minuuttia?/,"minuutin")}function u(t){return t.replace(/tuntia?/,"tunnin")}function r(t){return t.replace(/(viikko|viikkoa)/,"viikon")}function o(t){return t.replace(/(kuukausi|kuukautta)/,"kuukauden")}function l(t){return t.replace(/(vuosi|vuotta)/,"vuoden")}a.r(e);var s={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:n},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:n},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(t){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:i},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:i},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:u},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:u},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:function(t){return t.replace(/päivää?/,"päivän")}},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:r},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:r},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:o},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:o},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:l},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:l},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:l},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:l}};var k=a(5),d={date:Object(k.a)({formats:{full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},defaultWidth:"full"}),time:Object(k.a)({formats:{full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},defaultWidth:"full"}),dateTime:Object(k.a)({formats:{full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},c={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'tänään klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"};var f=a(3),m={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},h={narrow:m.narrow,abbreviated:m.abbreviated,wide:m.wide.map((function(t){return t+"ta"}))},v={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},p={narrow:v.narrow,short:v.short,abbreviated:v.abbreviated,wide:v.wide.map((function(t){return t+"na"}))};var b={ordinalNumber:function(t){return Number(t)+"."},era:Object(f.a)({values:{narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]},defaultWidth:"wide"}),quarter:Object(f.a)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Object(f.a)({values:m,formattingValues:h,defaultWidth:"wide"}),day:Object(f.a)({values:v,formattingValues:p,defaultWidth:"wide"}),dayPeriod:Object(f.a)({values:{narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}},defaultWidth:"wide"})},y=a(8),w=a(4),g={code:"fi",formatDistance:function(t,e,a){a=a||{};var n=s[t],i=1===e?n.one:n.other.replace("{{count}}",e);return a.addSuffix?a.comparison>0?n.futureTense(i)+" kuluttua":i+" sitten":i},formatLong:d,formatRelative:function(t,e,a,n){return c[t]},localize:b,match:{ordinalNumber:Object(y.a)({matchPattern:/^(\d+)(\.)/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:Object(w.a)({matchPatterns:{narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^j/i]},defaultParseWidth:"any"}),quarter:Object(w.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Object(w.a)({matchPatterns:{narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},defaultParseWidth:"any"}),day:Object(w.a)({matchPatterns:{narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:Object(w.a)({matchPatterns:{narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};e.default=g}}))}}}));