async function PIPEBUILD(){
    const achse = await loadRAW("./achse-quelle-7.csv");
    const modul = await loadRAW("./modul-rel-0.csv");

    const achseNummern = selectRAW(achse, 0);
    const modulWerte = selectRAW(modul, 1);

    const bindung = bindRAW(achseNummern, modulWerte);

    renderList("scan-output", bindung);

    saveRAW("pipebuild-output", bindung);
}
