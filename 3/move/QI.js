export const QI = {

    scan(item){
        return {
            id: item.id || "UNBEKANNT",
            type: item.type || "MODUL",
            fluid: this.fluid(item),
            vapor: this.vapor(item),
            solid: this.solid(item),
            functional: this.functional(item),
            stability: this.stability(item),
            percent: this.percent(item),
            degree: this.degree(item),
            axis: this.axis(item),
            ready: this.ready(item),
            timestamp: Date.now()
        };
    },

    fluid(item){ return item.flow ? "FLÜSSIG" : "TROCKEN"; },
    vapor(item){ return item.heat ? "DAMPF" : "KALT"; },
    solid(item){ return item.core ? "KÖRPERLICH" : "FORMLOS"; },
    functional(item){ return item.fn ? "FUNKTIONSFÄHIG" : "INAKTIV"; },
    stability(item){ return item.stable ? "STABIL" : "INSTABIL"; },
    percent(item){ return item.percent || 0; },
    degree(item){ return item.degree || 0; },
    axis(item){ return item.axis || "0°"; },
    ready(item){ return item.ready || false; }
};
