modelisation objet :
    principes de conception (design principles)
        5 principes :

    méthodologie de conception
        travail systhematique a partir de la spécification aux modules.

    méthodologie de conception : simuler un processus de conception logique
        décomposer le logiciel
        définir les interfaces
        décrire
        documenté
    principes de conception : Modularité
        c'est le principe de separation des différents aspects non en relation d'un systeme, de facon a pouvoir étudier chaque aspect de facon isolée 
        la caractéridtique d'un logiciel modulaire _ couplage faible et la cohesion forte _
        
        **_**le couplage :
        mésure l'interdépendance d'un constituant par rapport a un autre.
        il existe différents type de dépendance: 
            les références faite d'un module par autre 
        **le couplage par contenu ( le pire )
        se produit quand un composant modifie une donnée interne a un autre composant, ou quand un composant fait un branchement au milieu ...
        ** le couplage par données commune (le mmoin pire)
        ** le couplage de contrôle et autres:
            un module transmet à l'autre une information  (flag) destinée à contrôler sa logique interne .
            il est impossible ....
        **_** la cohésion : 
            mésure la dépendance entre les éléments internes à 
            * cohésion fonctionnelle : toutes les action du modules  contribuent à remplir une seule et même fonction.
            * cohésion informationnelle

            *Une interface definit les services ...
            la spécification de l'interface d'un unité logicielle qui definit....

            * Encapculation dans la modélisation Objet .
                dans la conception OO, nous décomposons un sytème en objets et leurs types associés.
            * Développement incrementale
            * Abstraction 
                c'est un modèle ou répresentation qui omet certains détails afin de mettre l'accent sur certains aspects..
            * Généralisation ...
            * modélisation objet
                la modélisation orientées objet sont les méthodologies les plus populaire et sophistiquées.
                *** héritage et polymorphisme ***
                _ terminologie 
                *** relation d'agregation et de composition *** 

            en java on herite une class mais implémente un interface...
            noton héritage multiple : C++ Pyhton...
            les interfaces sont une solution pour resoudre lesprobleme d'héritage multiple (plus de deux ) en JAVA 
            dans un programme on cree des thread qui peuvent s'executée en parallèle :
            processus léger..
            on implémente plusieurs interfaces mais on hérite pas plusieurs class*

            * HéRITAGE vs COMPOSITION 
            * type de relations de Classe
                _ associaton
                _ compsition
                _ aggrega
                _ genéralization && (inheritance)
                _ dependency
                _ navigation

            ** Patterns OO
             il est aisé de se perdre dans la conception d'un logiciel.
            ** patterns Factory 
            but : permettre de creer des objets sans savoir leur type precis....





            <!-- gantt generate by kendo -->

            <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Kendo UI Snippet</title>

    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2022.1.119/styles/kendo.default-v2.min.css"/>

    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="https://kendo.cdn.telerik.com/2022.1.119/js/kendo.all.min.js"></script>
</head>
<body>
  
<div id="gantt"></div>
<script>
$("#gantt").kendoGantt({
  dataSource: [
    {
      id: 1,
      orderId: 0,
      parentId: null,
      title: "Task1",
      start: new Date("2014/6/17 9:00"),
      end: new Date("2014/6/17 11:00")
    },
    {
      id: 2,
      orderId: 1,
      parentId: null,
      title: "Task2",
      start: new Date("2014/6/17 12:00"),
      end: new Date("2014/6/17 14:00")
    }
  ],
  columns: [{
    field: "title",
    editor: function(container, options) {
      // create an input element
      var input = $("<input/>");
      // set its name to the field to which the column is bound ('title' in this case)
      input.attr("name", options.field);
      // append it to the container
      input.appendTo(container);
      // initialize a Kendo UI AutoComplete
      input.kendoAutoComplete({
        dataTextField: "title",
        dataSource: [
          { title: "Jackson" },
          { title: "Strong" },
          { title: "Simon"}
        ]
      });
    }
  }, "start", "end"]
});
</script>
</body>
</html>