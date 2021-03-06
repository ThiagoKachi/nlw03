const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-26.2500217",
        lng: "-49.5385779",
        name: "Lar de Amor",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "999999999",
        images: [
            "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1597791366640-e91489aaf430?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horários de visitas Das 8h até 18h",
        open_on_weekends: "1"
    })
    
    // Consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    

    // Consultar  somente 1 orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)
})