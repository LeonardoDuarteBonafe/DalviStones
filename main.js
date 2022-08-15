window.addEventListener("DOMContentLoaded", function () {
    
    var language = {
        eng: {
            navbar: {
                company: "COMPANY",
                news: "NEWS",
                quarry: "QUARRY",
                materials: "MATERIALS",
                middle_east: "MIDDLE EAST",
                budget: "BUDGET/<br>REQUEST",
                location: "LOCATION",
            },
            collapse_banner: {
                almond: {
                    title: "ALMOND",
                    text: "One of the main materials of our line of classics is back in production.",
                },
                argento: {
                    title: "ARGENTO",
                    text: "Another great project finished and delivered with our bestseller.",
                },
                giallo_bonanza: {
                    title: "GIALLO BONANZA",
                    text: "Excellent option for indoor and outdoor areas.",
                },
            },
            carousel_product: {
                quarry: {
                    title: "QUARRY",
                    text: "Dalvi Stones extracts various materials from its own quarries in Brazil. Some quarries have been explored for more than 20 years and are all in production, ensuring continuous supply. Top quality materials tested and approved in many markets and projects around the world.",
                },
                argento: {
                    title: "ARGENTO",
                    text: "In continuous production for over 15 years, the ARGENTO quarry is one of the most consistent in activity. It proves that the efficient extraction and conservation processes of the area are being managed in a sustainable way.",
                },
                almond: {
                    title: "ALMOND",
                    text: "Located next to the factory and already in operation for more than 25 years, the Almond quarry is proof that quality material and great commercial use never leaves the market. Excellent option for covering large areas such as: Facades, floors in indoor or outdoor installations.",
                },
            },
            carousel_dubai: {
                title: "DUBAI AND MIDDLE EAST",
                text: "As part of its commercial expansion project, Dalvi Stones UAE was born focused on meeting the growing demand for Brazilian ornamental stones in the Middle East market. With its operational base in Dubai, it will offer ready-to-deliver material through inventories in the port area of Jabel Ali and will meet through its commercial office the demands that will connect the most diverse Brazilian ornamental stones to the most beautiful projects being executed in the Middle East.",
            },
        },
        
        pt: {
            navbar: {
                company: "EMPRESA",
                news: "NOVIDADES",
                quarry: "PEDREIRA",
                materials: "MATERIAIS",
                middle_east: "ORIENTE MÉDIO",
                budget: "ORÇAMENTO/<br/>SOLICITAÇÃO",
                location: "LOCALIZAÇÃO",
            },
            collapse_banner: {
                almond: {
                    title: "AMÊNDOA",
                    text: "Um dos principais materiais da nossa linha de clássicos está de volta à produção.",
                },
                argento: {
                    title: "ARGENTO",
                    text: "Mais um grande projeto concluído e entregue com nosso best-seller.",
                },
                giallo_bonanza: {
                    title: "GIALLO BONANZA",
                    text: "Excelente opção para áreas interiores e exteriores.",
                },
            },
            carousel_product: {
                quarry: {
                    title: "PEDREIRA",
                    text: "A Dalvi Stones extrai diversos materiais de suas próprias pedreiras no Brasil. Algumas pedreiras estão em exploração há mais de 20 anos e estão todas em produção, garantindo abastecimento contínuo. Materiais de alta qualidade testados e aprovados em muitos mercados e projetos em todo o mundo.",
                },
                argento: {
                    title: "ARGENTO",
                    text: "Em produção contínua há mais de 15 anos, a pedreira ARGENTO é uma das mais consistentes em atividade. Isso prova que os processos eficientes de extração e conservação da área estão sendo administrados de forma sustentável.",
                },
                almond: {
                    title: "ALMOND",
                    text: "Localizada ao lado da fábrica e já em operação há mais de 25 anos, a pedreira da Amêndoa é a prova de que materiais de qualidade e ótimo aproveitamento comercial nunca saem do mercado. Excelente opção para cobertura de grandes áreas como: Fachadas, pisos em instalações internas ou externas.",
                },
            },
            carousel_dubai: {
                title: "DUBAI E ORIENTE MÉDIO",
                text: "Como parte de seu projeto de expansão comercial, a Dalvi Stones Emirados Árabes Unidos nasceu focada em atender a crescente demanda por rochas ornamentais brasileiras no mercado do Oriente Médio. Com base operacional em Dubai, oferecerá material pronto para entrega por meio de estoques na área portuária de Jabel Ali e atenderá por meio de seu escritório comercial as demandas que conectarão as mais diversas rochas ornamentais brasileiras aos mais belos projetos em execução no Oriente Médio.",
            },
        },
    };

    $('.paises').click(function(){
        localStorage.setItem("language", $(this).attr('id'));

        setTimeout(function () {
            location.reload(true);
        }, 150)
    }); 

    var pageLanguage = localStorage.getItem("language");
    if(pageLanguage == "pt"){
        //navbar
        $('.information-bar').children("ul").children("li").eq(0).children("a").text(language.pt.navbar.company);
        $('.information-bar').children("ul").children("li").eq(1).children("a").text(language.pt.navbar.news);
        $('.information-bar').children("ul").children("li").eq(2).children("a").text(language.pt.navbar.quarry);
        $('.information-bar').children("ul").children("li").eq(3).children("a").text(language.pt.navbar.materials);
        $('.information-bar').children("ul").children("li").eq(4).children("a").text(language.pt.navbar.middle_east);
        $('.information-bar').children("ul").children("li").eq(5).children("a").html(language.pt.navbar.budget);
        $('.information-bar').children("ul").children("li").eq(6).children("a").text(language.pt.navbar.location);
        
        //navbar collapsed
        $('.navbar-collapse').children("ul").children("li").eq(0).children("a").text(language.pt.navbar.company);
        $('.navbar-collapse').children("ul").children("li").eq(1).children("a").text(language.pt.navbar.news);
        $('.navbar-collapse').children("ul").children("li").eq(2).children("a").text(language.pt.navbar.quarry);
        $('.navbar-collapse').children("ul").children("li").eq(3).children("a").text(language.pt.navbar.materials);
        $('.navbar-collapse').children("ul").children("li").eq(4).children("a").text(language.pt.navbar.middle_east);
        $('.navbar-collapse').children("ul").children("li").eq(5).children("a").html(language.pt.navbar.budget);
        $('.navbar-collapse').children("ul").children("li").eq(6).children("a").text(language.pt.navbar.location);


        //collapse-banner
        $('#buttonCollapseOne').children("div").children("h3").text(language.pt.collapse_banner.almond.title);
        $('#buttonCollapseOne').children("div").children("p").text(language.pt.collapse_banner.almond.text);
        $('#buttonCollapseTwo').children("div").children("h3").text(language.pt.collapse_banner.argento.title);
        $('#buttonCollapseTwo').children("div").children("p").text(language.pt.collapse_banner.argento.text);
        $('#buttonCollapseThree').children("div").children("h3").text(language.pt.collapse_banner.giallo_bonanza.title);
        $('#buttonCollapseThree').children("div").children("p").text(language.pt.collapse_banner.giallo_bonanza.text);

        //carousel products
        $('#myCarousel2').children("div").children("div").eq(0).children("div").eq(1).children("h1").text(language.pt.carousel_product.quarry.title);
        $('#myCarousel2').children("div").children("div").eq(0).children("div").eq(1).children("p").text(language.pt.carousel_product.quarry.text);

        $('#myCarousel2').children("div").children("div").eq(1).children("div").eq(1).children("h1").text(language.pt.carousel_product.argento.title);
        $('#myCarousel2').children("div").children("div").eq(1).children("div").eq(1).children("p").text(language.pt.carousel_product.argento.text);

        $('#myCarousel2').children("div").children("div").eq(2).children("div").eq(1).children("h1").text(language.pt.carousel_product.almond.title);
        $('#myCarousel2').children("div").children("div").eq(2).children("div").eq(1).children("p").text(language.pt.carousel_product.almond.text);

        // carousel dubai
        $('#myCarousel3').children("div").children("div").eq(0).children("div").eq(1).children("h1").text(language.pt.carousel_dubai.title);
        $('#myCarousel3').children("div").children("div").eq(0).children("div").eq(1).children("p").text(language.pt.carousel_dubai.text);
        $('#myCarousel3').children("div").children("div").eq(1).children("div").eq(1).children("h1").text(language.pt.carousel_dubai.title);
        $('#myCarousel3').children("div").children("div").eq(1).children("div").eq(1).children("p").text(language.pt.carousel_dubai.text);
        $('#myCarousel3').children("div").children("div").eq(2).children("div").eq(1).children("h1").text(language.pt.carousel_dubai.title);
        $('#myCarousel3').children("div").children("div").eq(2).children("div").eq(1).children("p").text(language.pt.carousel_dubai.text);
        $('#myCarousel3').children("div").children("div").eq(3).children("div").eq(1).children("h1").text(language.pt.carousel_dubai.title);
        $('#myCarousel3').children("div").children("div").eq(3).children("div").eq(1).children("p").text(language.pt.carousel_dubai.text);

        //footer
        $('.footer-info').children("div").eq(0).children("a").eq(0).text(language.pt.navbar.company);
        $('.footer-info').children("div").eq(0).children("a").eq(1).text(language.pt.navbar.news);
        $('.footer-info').children("div").eq(0).children("a").eq(2).text(language.pt.navbar.quarry);
        $('.footer-info').children("div").eq(0).children("a").eq(3).text(language.pt.navbar.materials);
        $('.footer-info').children("div").eq(0).children("a").eq(4).text(language.pt.navbar.middle_east);
        $('.footer-info').children("div").eq(0).children("a").eq(5).text(language.pt.navbar.budget);
        $('.footer-info').children("div").eq(0).children("a").eq(6).text(language.pt.navbar.location);

    }


    /*$('.btn-language').click(function(){
        localStorage.setItem("language", $(this).attr('id'));
        if($(this).attr('id') == "pt"){
            console.log("pt language");

        }
        else{
            console.log("eng language");
        }
        setTimeout(function () {
            location.reload(true);
        }, 150)
    });*/

    var heightLogo = $('.logo').height();
    var heightNavbar = $('.navbar').height();

    console.log("nav: " + heightNavbar)

    $(window).on('resize', function(){
        var win = $(this); //this = window
        if (win.height() > 700) { 
            $('.menu-bar').addClass('fix-scroll-menu');
            $('.menu-bar').removeClass('scroll-menu');
        }
        else{
            if(!($('.information-bar').css('display') == 'none')){
                $('.menu-bar').addClass('scroll-menu');
                $('.menu-bar').removeClass('fix-scroll-menu');
            }
        }
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop() > heightLogo) {
            $('.menu-bar').addClass('fixed');
            if(!($('.information-bar').css('display') == 'none')){
                $('.collapseMenu').children("img").attr("src", "Imagens/menu-bar-expand.png");
                $('.information-bar').hide();
                $('.menu-bar').addClass('fix-scroll-menu');
                $('.menu-bar').removeClass('scroll-menu');
            }
        }
        else{
            $('.menu-bar').removeClass('fixed');
            if($('.information-bar').css('display') == 'none'){
                $('.information-bar').show();                $('.collapseMenu').children("img").attr("src", "Imagens/menu-bar-retreat.png");
                if($( window ).height() < 700){
                    $('.menu-bar').addClass('scroll-menu');
                    $('.menu-bar').removeClass('fix-scroll-menu');
                }
            }
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > heightNavbar) {
            console.log("entrou");
            $('.navbar').addClass('fixednavbar');
        }
        else{
            $('.navbar').removeClass('fixednavbar');
        }
    });

    $('.collapseMenu').click(function(){
        if($('.information-bar').css('display') == 'none'){
            $('.collapseMenu').children("img").attr("src", "Imagens/menu-bar-retreat.png");
            $('.information-bar').show();
            if($( window ).height() < 640){
                $('.menu-bar').addClass('scroll-menu');
                $('.menu-bar').removeClass('fix-scroll-menu');
            }
        }
        else{
            $('.collapseMenu').children("img").attr("src", "Imagens/menu-bar-expand.png");
            $('.information-bar').hide();
            if($( window ).height() < 640){
                $('.menu-bar').addClass('fix-scroll-menu');
                $('.menu-bar').removeClass('scroll-menu');
            }
        }
    })

    $('.product-banner').click(function(){
        //alert('clicado');

        /*const params = (new URL(document.location)).searchParams;
        const name = params.get('name');
        const surname = params.get('surname');*/
        const category = $(this).attr('id');
        console.log("category: " + category);
        localStorage.setItem("category", category);
        localStorage.setItem("background", "true");

        if(category == "classic"){
            console.log("classico");
            localStorage.setItem("producttype", "almond");
        }
        else if(category == "exotic"){
            console.log("exotico");
            localStorage.setItem("producttype", "blizzard");
        }else if(category == "superexotic"){
            console.log("super");
            localStorage.setItem("producttype", "antartic");
        }
        /*
        //localStorage.setItem("color", surname);*/
        window.location.href ="produtos.html";
    })

    if(location.href.split('/').pop()  === "produtos.html"){
        console.log("pagina de produtos");

        changeProductImages();

        function changeProductImages(){

            var category = localStorage.getItem("category");
            var producttype = localStorage.getItem("producttype");
            var background = localStorage.getItem("background");

            if(background == "true"){
                if(category == "classic"){
                    console.log("classico");

                    $('.accordion').children("div").eq(0).children("h2").children("button").attr("aria-expanded", "true");
                    /*$('.accordion').children("div").eq(1).children("h2").children("button").attr("aria-expanded", "false");
                   $('.accordion').children("div").eq(2).children("h2").children("button").attr("aria-expanded", "false");
                    */
                    $('.accordion').children("div").eq(0).children("h2").children("button").removeClass("collapsed");
                    $('.accordion').children("div").eq(0).children("div").addClass("show");
                    $/*('.accordion').children("div").eq(1).children("div").removeClass("show");
                    $('.accordion').children("div").eq(2).children("div").removeClass("show");*/

                    $('#almond').css("background-color", "#1C2742");
                    $('#almond').css("color", "white");
                }
                else if(category == "exotic"){
                    console.log("exotico");
                    /*$('.accordion').children("div").eq(0).children("h2").children("button").attr("aria-expanded", "false");*/
                    $('.accordion').children("div").eq(1).children("h2").children("button").attr("aria-expanded", "true");
                    /*$('.accordion').children("div").eq(2).children("h2").children("button").attr("aria-expanded", "false");*/
                    $('.accordion').children("div").eq(1).children("h2").children("button").removeClass("collapsed");
                    $('.accordion').children("div").eq(1).children("div").addClass("show");
                    /* $('.accordion').children("div").eq(0).children("div").removeClass("show");
                    $('.accordion').children("div").eq(2).children("div").removeClass("show");*/

                    $('#blizzard').css("background-color", "#1C2742");
                    $('#blizzard').css("color", "white");
                }else if(category == "superexotic"){
                    console.log("super");
                    /*$('.accordion').children("div").eq(0).children("h2").children("button").attr("aria-expanded", "false");
                   $('.accordion').children("div").eq(1).children("h2").children("button").attr("aria-expanded", "false");*/
                    $('.accordion').children("div").eq(2).children("h2").children("button").attr("aria-expanded", "true");
                    $('.accordion').children("div").eq(2).children("h2").children("button").removeClass("collapsed");
                    $('.accordion').children("div").eq(2).children("div").addClass("show");
                    /* $('.accordion').children("div").eq(0).children("div").removeClass("show");
                    $('.accordion').children("div").eq(1).children("div").removeClass("show");*/

                    $('#antartic').css("background-color", "#1C2742");
                    $('#antartic').css("color", "white");
                }
                localStorage.setItem("background", "false");
            }

            //var url = "Imagens/Produtos/"+category +"/" + category +"-"+producttype;
            var url = "Imagens/Produtos/"+category +"/" +producttype;

            var urlImage1 = url + "/chapa.png";
            $.get(urlImage1)
                .done(function() { 
                console.log("imagem existe 1");
                //$('.productpage-image1').children("img").attr("src", urlImage1);
                $('#productpage-image1').children("img").attr("src", urlImage1);
                $('#productpage-image1').show();
                //$('.productpage-banner').children("img").attr("src", urlImage1);
                $('.productpage-banner').attr("src", urlImage1);
            }).fail(function() { 
                console.log("image dont exist"); 
                //$('#productpage-image1').css("display", "none");
                $('#productpage-image1').hide();
            })

            var urlImage2 = url + "/close1.png";
            $.get(urlImage2)
                .done(function() { 
                console.log("imagem existe 2");
                //$('.productpage-image2').children("img").attr("src", urlImage2);
                $('#productpage-image2').children("img").attr("src", urlImage2);
                $('#productpage-image2').show();
            }).fail(function() { 
                console.log("image dont exist"); 
                //$('#productpage-image2').css("display", "none");
                $('#productpage-image2').hide();
            })

            var urlImage3 = url + "/close2.png";
            $.get(urlImage3)
                .done(function() { 
                console.log("imagem existe 3"); 
                //$('.productpage-image3').children("img").attr("src", urlImage3);
                $('#productpage-image3').children("img").attr("src", urlImage3);
                $('#productpage-image3').show();
            }).fail(function() { 
                console.log("image dont exist"); 
                //$('#productpage-image3').css("display", "none");
                $('#productpage-image3').hide();
            })

            var urlImage4 = url + "/bundle1.png";
            $.get(urlImage4)
                .done(function() { 
                console.log("imagem existe 4"); 
                //$('.productpage-image4').children("img").attr("src", urlImage4);
                $('#productpage-image4').children("img").attr("src", urlImage4);
                $('#productpage-image4').show();
            }).fail(function() { 
                console.log("image dont exist"); 
                //$('#productpage-image4').css("display", "none");
                $('#productpage-image4').hide();
            })

            var urlImage5 = url + "/bundle2.png";
            $.get(urlImage5)
                .done(function() { 
                console.log("imagem existe 5"); 
                //$('.productpage-image5').children("img").attr("src", urlImage5);
                $('#productpage-image5').children("img").attr("src", urlImage5);
                $('#productpage-image5').show();
            }).fail(function() { 
                console.log("image dont exist"); 
                //$('#productpage-image5').css("display", "none");
                $('#productpage-image5').hide();
            })

            /*var urlVideo = url + "/video1.png";
        $.get(urlVideo)
            .done(function() { 
            console.log("imagem existe video"); $('.pageprodutovideo1').children("img").attr("src", urlVideo);
        }).fail(function() { 
            console.log("image dont exist"); $('.pageprodutovideo1').css("display", "none");
        })*/

        }
        $('.productpage-image').click(function(){
            //alert($(this).attr('id'));
            var category = localStorage.getItem("category");
            var producttype = localStorage.getItem("producttype");
            var url = "Imagens/Produtos/"+category +"/" +producttype;
            var productClicked = $(this).attr('id');
            var urlBackground = "";
            switch(productClicked){
                case "productpage-image2":
                    urlBackground = url + "/close1.png";
                    break;
                case "productpage-image3":
                    urlBackground = url + "/close2.png";
                    break;
                case "productpage-image4":
                    urlBackground = url + "/bundle1.png";
                    break;
                case "productpage-image5":
                    urlBackground = url + "/bundle2.png";
                    break;
                default:
                    urlBackground = url + "/chapa.png";
                    break;
            }
            $('.productpage-banner').attr("src", urlBackground);
        });

        $('.productbutton-classic').click(function(){
            //alert($(this).attr('id'));
            //$(this).addClass('.activeproduct');
            $(this).css("background-color", "#1C2742").siblings().css("background-color", "white");
            $(this).css("color", "white").siblings().css("color", "black");


            $('.productbutton-exotic').css("background-color", "white");
            $('.productbutton-exotic').css("color", "black");
            $('.productbutton-superexotic').css("background-color", "white");
            $('.productbutton-superexotic').css("color", "black");
            localStorage.setItem("category", "classic");
            localStorage.setItem("producttype", $(this).attr('id'));
            changeProductImages();

        });

        $('.productbutton-exotic').click(function(){
            //alert($(this).attr('id'));
            $(this).css("background-color", "#1C2742").siblings().css("background-color", "white");
            $(this).css("color", "white").siblings().css("color", "black");


            $('.productbutton-classic').css("background-color", "white");
            $('.productbutton-classic').css("color", "black");
            $('.productbutton-superexotic').css("background-color", "white");
            $('.productbutton-superexotic').css("color", "black");
            localStorage.setItem("category", "exotic");
            localStorage.setItem("producttype", $(this).attr('id'));
            changeProductImages();

        });

        $('.productbutton-superexotic').click(function(){
            //alert($(this).attr('id'));
            $(this).css("background-color", "#1C2742").siblings().css("background-color", "white");
            $(this).css("color", "white").siblings().css("color", "black");

            $('.productbutton-exotic').css("background-color", "white");
            $('.productbutton-exotic').css("color", "black");
            $('.productbutton-classic').css("background-color", "white");
            $('.productbutton-classic').css("color", "black");
            localStorage.setItem("category", "superexotic");
            localStorage.setItem("producttype", $(this).attr('id'));
            changeProductImages();

        });

        $('.btn-collapse').click(function(){

            console.log("clicando"); $(this).collapse();
        });


    }

});
