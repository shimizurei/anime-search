function createMenu(id, title, parentId, onclick) {
    chrome.contextMenus.create({
        id: id,
        title: title,
        contexts: ["selection"],
        parentId: parentId,
        onclick: onclick
    });
}

function searchAnime(info, tab) {
    var id = info.menuItemId.replace("anime-", "");
    var search = encodeURIComponent(info.selectionText);
    var searchMap = {
        kitsu: "https://kitsu.io/anime?text=",
        mal: "https://myanimelist.net/anime.php?q=",
        anilist: "https://anilist.co/search?type=anime&q=",
        anidb: "https://anidb.net/perl-bin/animedb.pl?show=animelist&noalias=0&adb.search=",
        ann: "https://www.animenewsnetwork.com/encyclopedia/search/name?only=anime&q=",
        anngoog: "https://www.google.com/#q=site:animenewsnetwork.com/encyclopedia/anime.php+",
        annddg: "https://duckduckgo.com/?q=site:animenewsnetwork.com/encyclopedia/anime.php+",
        ap: "https://www.anime-planet.com/anime/all?name=",
        amazon: "https://www.amazon.co.jp/s/url=search-alias%3Ddvd&field-keywords=",
        cr: "http://www.crunchyroll.com/search?q=",
        funi: "https://www.funimation.com/search/?q=",
        hulu: "https://www.hulu.com/search?q=genre%3Aanime+show%3A",
        daisuki: "http://www.daisuki.net/search.html?keyword=",
        viewster: "http://www.viewster.com/search/",
        netflix: "https://www.netflix.com/search?q=",
        aniplex: "http://aniplexchannel.com/?s=",
        justwatch: "https://www.justwatch.com/us/search?genres=ani&q=",
        sentai: "https://www.sentaifilmworks.com/search?q=",
        viz: "https://www.viz.com/search?category=Series&search="
    };
    var searchUrl = searchMap[id] + search;

    chrome.tabs.create({
        url: searchUrl
    });
}

function searchManga(info, tab) {
    var id = info.menuItemId.replace("manga-", "");
    var search = encodeURIComponent(info.selectionText);
    var searchMap = {
        kitsu: "https://kitsu.io/manga?text=",
        mal: "https://myanimelist.net/manga.php?q=",
        anilist: "https://anilist.co/search?type=manga&q=",
        mugoog: "https://www.google.com/#q=site:mangaupdates.com/series.html+",
        muddg: "https://duckduckgo.com/?q=site:mangaupdates.com/series.html+",
        ann: "https://www.animenewsnetwork.com/encyclopedia/search/name?only=manga&q=",
        anngoog: "https://www.google.com/#q=site:animenewsnetwork.com/encyclopedia/manga.php+",
        annddg: "https://duckduckgo.com/?q=site:animenewsnetwork.com/encyclopedia/manga.php+",
        ap: "https://www.anime-planet.com/manga/all?name=",
        amazon: "https://www.amazon.co.jp/s/url=search-alias%3Dstripbooks&field-keywords=",
        doujin: "https://www.doujinshi.org/search/simple/?T=objects&sn=",
        yenpress: "http://www.hachettebookgroup.com/search/?imprint=Yen&q=",
        kodgoog: "https://www.google.com/#q=site:kodanshacomics.com/series/+",
        kodddg: "https://duckduckgo.com/?q=site:kodanshacomics.com/series/+",
        viz: "https://www.viz.com/search?category=Manga&search=",
        batoto: "https://bato.to/search?name=",
        mangahelpers: "https://mangahelpers.com/search?q=",
        line: "http://www.webtoons.com/search?keyword=",
        naver: "http://comic.naver.com/search.nhn?keyword="
    };
    var searchUrl = searchMap[id] + search;

    chrome.tabs.create({
        url: searchUrl
    });
}

function searchNovels(info, tab) {
    var id = info.menuItemId.replace("novel-", "");
    var search = encodeURIComponent(info.selectionText);
    var searchMap = {
        lndb: "http://lndb.info/search?text=",
        novelupdates: "http://www.novelupdates.com/?s=",
        bakatsuki: "https://baka-tsuki.org/project/index.php?title=Special:Search&search="
    };
    var searchUrl = searchMap[id] + search;

    chrome.tabs.create({
        url: searchUrl
    });
}

function searchCharacters(info, tab) {
    var id = info.menuItemId.replace("chara-", "");
    var search = encodeURIComponent(info.selectionText);
    var searchMap = {
        mal: "https://myanimelist.net/character.php?q=",
        anidb: "https://anidb.net/perl-bin/animedb.pl?show=characterlist&noalias=1&adb.search=",
        ap: "https://www.anime-planet.com/characters/all?name="
    };
    var searchUrl = searchMap[id] + search;

    chrome.tabs.create({
        url: searchUrl
    });
}

var animeSources = [
    ["kitsu", "Kitsu"],
    ["mal", "MAL"],
    ["anilist", "Anilist"],
    ["anidb", "AniDB"],
    ["ann", "ANN"],
    ["anngoog", "ANN (Google)"],
    ["annddg", "ANN (DDG)"],
    ["ap", "Anime-Planet"],
    ["amazon", "Amazon (Japan)"],
    ["cr", "Crunchyroll"],
    ["funi", "Funimation"],
    ["hulu", "Hulu"],
    ["daisuki", "Daisuki"],
    ["viewster", "Viewster"],
    ["netflix", "Netflix"],
    ["aniplex", "Aniplex Channel"],
    ["justwatch", "JustWatch (Meta)"],
    ["sentai", "Sentai Filmworks"],
    ["viz", "Viz"]
];
var mangaSources = [
    ["kitsu", "Kitsu"],
    ["mal", "MAL"],
    ["anilist", "Anilist"],
    ["mugoog", "MangaUpdates (Google)"],
    ["muddg", "MangaUpdates (DDG)"],
    ["ann", "ANN"],
    ["anngoog", "ANN (Google)"],
    ["annddg", "ANN (DDG)"],
    ["ap", "Anime-Planet"],
    ["amazon", "Amazon (Japan)"],
    ["doujin", "Doujinshi Lexicon"],
    ["yenpress", "YenPress"],
    ["kodgoog", "Kodansha Comics (Google)"],
    ["kodddg", "Kodansha Comics (DDG)"],
    ["viz", "Viz"],
    ["batoto", "Batoto"],
    ["mangahelpers", "MangaHelpers"],
    ["line", "LINE Webtoon"],
    ["naver", "Naver (Korea)"]
];
var novelSources = [
    ["lndb", "LNDB"],
    ["novelupdates", "Novel Updates"],
    ["bakatsuki", "Baka-Tsuki"]
];
var charaSources = [
    ["mal", "MAL"],
    ["anidb", "AniDB"],
    ["ap", "Anime-Planet"]
];

var anime = chrome.contextMenus.create({
                id: "anime",
                title: "Anime",
                contexts: ["selection"]
            });
var manga = chrome.contextMenus.create({
                id: "manga",
                title: "Manga",
                contexts: ["selection"]
            });
var novel = chrome.contextMenus.create({
                id: "novel",
                title: "Novels",
                contexts: ["selection"]
            });
var character = chrome.contextMenus.create({
                id: "character",
                title: "Characters",
                contexts: ["selection"]
            });

for (var i = 0; i < animeSources.length; i++) {
    createMenu("anime-" + animeSources[i][0], animeSources[i][1], anime, searchAnime);
}
for (var i = 0; i < mangaSources.length; i++) {
    createMenu("manga-" + mangaSources[i][0], mangaSources[i][1], manga, searchManga);
}
for (var i = 0; i < novelSources.length; i++) {
    createMenu("novel-" + novelSources[i][0], novelSources[i][1], novel, searchNovels);
}
for (var i = 0; i < charaSources.length; i++) {
    createMenu("chara-" + charaSources[i][0], charaSources[i][1], character, searchCharacters);
}
