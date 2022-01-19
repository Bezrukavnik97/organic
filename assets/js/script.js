$(document).ready(function () {
    if ($(".counters-container").length) {
        let show = true;
        let countbox = ".counters-container";
        $(window).on("scroll load resize", function () {
            if (!show) return false;
            let w_top = $(window).scrollTop();
            let e_top = $(countbox).offset().top;
            let w_height = $(window).height();
            if (w_top > e_top - w_height + w_height/3) {
                $('.counter-top').css('opacity', '1');
                $('.counter-num').spincrement({
                    thousandSeparator: "",
                    duration: 4000
                });
                show = false;
            }
        });
    }

    let mainBanner = new Swiper('.main-banner-slider', {
        speed: 1500,
        effect: 'cubic-bezier(.76,.02,.3,.96)',
        pagination: {
            el: '.swiper-pagination',
            clickable: true

        },
        navigation: {
            nextEl: '.banner-right',
            prevEl: '.banner-left',
        },
        // autoplay: {
        //     delay: 5000,
        // },
    });


    let searchResultPage = new Swiper('.search-result-slider', {
        slidesPerView: 1.5,
        spaceBetween: 30,
        navigation: {
            nextEl: '.search-right',
            prevEl: '.search-left',
        },
        breakpoints: {
            480: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 3.5,
            },
            992: {
                slidesPerView: 4.5,
            },
            1200: {
                slidesPerView: 5.5,
            },
        },
    });


    if($(".certificate-item").length) {
        $(".certificate-icon").on("click", function (){
            let item = $(this).closest(".certificate-item"),
                itemHeight = item.innerHeight(),
                wrapHeight = item.find(".certificate-item-slider-wrap").innerHeight();
                //activeItem = $(".certificates-block .active");

            item.height(itemHeight); //присваивание текущей высоты по клику


            //let hiddenHeight = item.find(".certificate-item-inner").innerHeight();

            // activeItem.height(itemHeight - hiddenHeight);
            // activeItem.find(".certificate-item-slider-wrap").height(0);
            // activeItem.find(".slider-init").removeClass("search-result-slider");
            // activeItem.removeClass("active");

            if(wrapHeight == 0) {
                item.find(".slider-init").addClass("search-result-slider"); //добавление класса для инициализации слайдера

                //инициализация слайдера
                let searchResult = new Swiper('.search-result-slider', {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                    navigation: {
                        nextEl: '.search-right',
                        prevEl: '.search-left',
                    },
                    breakpoints: {
                        480: {
                            slidesPerView: 2.5,
                        },
                        768: {
                            slidesPerView: 3.5,
                        },
                        992: {
                            slidesPerView: 4.5,
                        },
                        1200: {
                            slidesPerView: 5.5,
                        },
                    },
                });

                let hiddenHeight = item.find(".certificate-item-inner").innerHeight();

                item.height(hiddenHeight + itemHeight);
                item.find(".certificate-item-slider-wrap").height(hiddenHeight);
                item.addClass("active");
                $(".certificates-block").addClass("active");
            } else {
                let hiddenHeight = item.find(".certificate-item-inner").innerHeight();

                item.removeClass("active");
                item.height(itemHeight - hiddenHeight);
                item.find(".certificate-item-slider-wrap").height(0);
                item.find(".slider-init").removeClass("search-result-slider");
                $(".certificates-block").removeClass("active");
            }
        });
    }


    let searchResult = new Swiper('.slider-partner-init', {
        slidesPerView: 1.5,
        spaceBetween: 30,
        navigation: {
            nextEl: '.search-right.slider-partner',
            prevEl: '.search-left.slider-partner',
        },
        breakpoints: {
            480: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 3.5,
            },
            992: {
                slidesPerView: 4.5,
            },
            1200: {
                slidesPerView: 5.5,
            },
        },
    });

    $(function() {
        $('select').selectric();
    });




    const FagToggle = (classes, wrapper=".container") => {
        if(document.querySelector(classes)){
    const wrapperSpil = document.querySelector(wrapper),
        buttons = wrapperSpil.querySelectorAll('.accordion-title'),
        containerItems = wrapperSpil.querySelectorAll(classes),
        contentHideItems = wrapperSpil.querySelectorAll('.accordion-content');

        for (let i = 0; i < buttons.length; i++) {
            let btn = buttons[i];
            //let height = contentHideItems[i].scrollHeight;
            // if (i === 0) {
            //     buttons[i].classList.add('open');
            //     containerItems[i].style.height = height + 'px'
            // }
            btn.addEventListener('click', () => {
                let height = contentHideItems[i].scrollHeight;

                if (!containerItems[i].style.height || containerItems[i].style.height == '0px' ) {
                    containerItems[i].style.height = height + 'px'
                    btn.classList.add('open')
                }
                else if (containerItems[i].style.height  && btn.classList.contains('open')) {
                    containerItems[i].style.height = '0px'
                    btn.classList.remove('open')
                }
            })
        }
    }
}
   
     FagToggle('.accordion-content-wrap', '.acardion-section');
     FagToggle('.certificate-item-slider-wrap', '.certificates-block');       
   


    $(".privacy-links-block").on("click","a", function (event) {
        event.preventDefault();

        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        console.log(id);

        $('body,html').animate({scrollTop: top - 180}, 500);
    });

    //mobile-menu
    function mobileMenu() {
        if ($(window).width() < 769) {
            $(".header-nav").appendTo(".mobile-menu");
            $(".header-top-list").appendTo(".mobile-menu");
        } else {
            $(".header-nav").appendTo(".header-nav-append");
            $(".header-top-list").appendTo(".header-top-list-append");
        }
    }
    mobileMenu ();


    $(window).on("resize", function (){
        mobileMenu ();
    });

    $(".mobile-menu-btn").on("click", function (){
        if($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".mobile-menu").removeClass("active");
            $("body").removeClass("body-menu-layer");
        } else {
            $(this).addClass("active");
            $(".mobile-menu").addClass("active");
            $("body").addClass("body-menu-layer");
        }

    });


    //popups
    let cbPopup = $(".callback-popup"),
        rqPopup = $(".request-popup");

    $(".order-btn").on("click", function () {
        $.fancybox.open(cbPopup);
    });

    $(".education-titles .filled-btn").on("click", function () {
        $.fancybox.open(rqPopup);
    });

    //tabs

    function Tabs(button, contents) {
        let buttons = $(button),
            content = $(contents);

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function () {
                if ($(this).hasClass("active") == 0) {
                    content.removeClass("active");
                    buttons.removeClass("active");
                    $(buttons[i]).addClass("active");
                    $(content[i]).addClass("active");

                }
            }
        }
    }
    Tabs(".contacts-tab", ".contacts-tabs-content");
    Tabs(".certificat-tab_header", ".certificat-tab_content");

    //валидация
    $("#callback-form-control").validate({
        errorPlacement: $.noop,
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true
            },
            post: {
                required: false
            }
        },
        messages: {
            name: {
                required: ""
            },
            phone: {
                required: ""
            }
        },
        submitHandler: function() {

            //test
            $.fancybox.close(cbPopup);
            $("#callback-form-control").trigger('reset');
            //


            $.ajax({
                type: "",
                url: "",
                data: "",
                success: function () {
                    // $.fancybox.close(cbPopup);
                    // $("#callback-form-control").trigger('reset');
                }
            });
        }
    });

    $("#request-form-control").validate({
        errorPlacement: $.noop,
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true
            },
            post: {
                required: false
            }
        },
        messages: {
            name: {
                required: ""
            },
            phone: {
                required: ""
            }
        },
        submitHandler: function() {

            //test
            $.fancybox.close(rqPopup);
            $("#request-form-control").trigger('reset');
            //


            $.ajax({
                type: "",
                url: "",
                data: "",
                success: function () {
                    // $.fancybox.close(cbPopup);
                    // $("#request-form-control").trigger('reset');
                }
            });
        }
    });

    //Ввод цифр********************************************************
    $('.numbers-input').on('input change paste', function() {
        $(this).val(this.value.replace(/[^0-9\-]/, ''));
    });
});

//ios menu scroll
var FenixUI = {
    overlayModalIos : function($block) {
        var _overlay = document.getElementById($block);
        var _clientY = null; // remember Y position on touch start

        if(!_overlay) {
            return '';
        }

        _overlay.addEventListener('touchstart', function(event) {
            if(event.targetTouches.length === 1) {
                // detect single touch
                _clientY = event.targetTouches[0].clientY;
            }
        },  { passive: false } );

        _overlay.addEventListener('touchmove', function(event) {
            if(event.targetTouches.length === 1) {
                // detect single touch
                disableRubberBand(event);
            }
        },  { passive: false } );

        function disableRubberBand(event) {
            var clientY = event.targetTouches[0].clientY - _clientY;

            if(_overlay.scrollTop === 0 && clientY > 0) {
                // element is at the top of its scroll
                event.preventDefault();
            }

            if(isOverlayTotallyScrolled() && clientY < 0) {
                //element is at the top of its scroll
                event.preventDefault();
            }
        }

        function isOverlayTotallyScrolled() {
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
            return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
        }
    }
};

FenixUI.overlayModalIos('mobile-menu-overlay');


//brief

/**
 * Created by Aproximo
 */
// Функція яка очищає вміст прихованого діва після відключення чекбокса
function clean_unchecky()
{

    var checkbox_ids = ['add_1_operator_checkbox',
        'add_pid_checkbox',
        'agree_for_first_company',
        'add_1_pid_checkbox',
        'add_2_pid_checkbox',
        'production_crop_production_checkbox',
        'traid_crop_production_checkbox',
        'export_crop_production_checkbox',
        'crop_production_1_checkbox',
        'crop_production_after_checkbox',
        'production_wild_collection_checkbox',
        'traid_wild_collection_checkbox',
        'export_wild_collection_checkbox',
        'wild_collection_after_checkbox',
        'production_animal_husbandry_checkbox',
        'traid_animal_husbandry_checkbox',
        'export_animal_husbandry_checkbox',
        'vrh_checkbox',
        'poultry_checkbox',
        'production_beekeeping_checkbox',
        'traid_beekeeping_checkbox',
        'export_beekeeping_checkbox',
        'production_aquaculture_checkbox',
        'traid_aquaculture_checkbox',
        'export_aquaculture_checkbox',
        'production_processing_products_for_use_as_food_checkbox',
        'traid_processing_products_for_use_as_food_checkbox',
        'export_processing_products_for_use_as_food_checkbox',
        'activities_in_food_processing_checkbox',
        'wine_industry_checkbox',
        'production_processing_products_for_use_as_feed_checkbox',
        'traid_processing_products_for_use_as_feed_checkbox',
        'export_processing_products_for_use_as_feed_checkbox',
        'production_growing_seedlings_and_seed_checkbox',
        'traid_growing_seedlings_and_seed_checkbox',
        'export_growing_seedlings_and_seed_checkbox',
        'growing_seedlings_and_seed_after_checkbox',
        'other_2_checkbox',
        'other_3_checkbox',
        'other_5_checkbox',
        'agree_for_first_company'];

    for (var i = 0; i < checkbox_ids.length; i++)
    {


        var element = document.getElementById(checkbox_ids[i]);
        var hid_element = document.getElementById(element.name);


        if(element.checked == false)
        {

            var elements = hid_element.getElementsByTagName("*");

            for (var j = 0, len = elements.length; j < len; j++)
            {

                if (elements[j].name )
                {
                    elements[j].value='';
                }


            }

        }
        /* else
         {

             var elements1 = hid_element.getElementsByTagName("*");

             for (var z = 0, len = elements1.length; z < len; z++)
             {
                 if ( elements1[z].nodeName =='OPTION' || elements1[z].nodeName =='BUTTON')
                 {
                     //alert(elements1[z].nodeName);
                 }

                 else
                 {
                 elements1[z].style.borderColor = "inherit";

                 if (elements1[z].value =='' )

                     {

                         alert("Будь ласка заповніть всі поля");

                         elements1[z].style.borderColor = "red";
                         elements1[z].scrollIntoView(true);
                         return false;
                     }
                 }
              }
         } */

    }
    return check_form();


}


// Функція перевірки на заповнення полів
function check_form(){

    var checkbox_ids = ['add_1_operator_checkbox',
        'add_pid_checkbox',
        'add_1_pid_checkbox',
        'add_2_pid_checkbox',
        'traid_crop_production_checkbox',
        'export_crop_production_checkbox',
        'crop_production_1_checkbox',
        'crop_production_after_checkbox',
        'traid_wild_collection_checkbox',
        'export_wild_collection_checkbox',
        'wild_collection_after_checkbox',
        'traid_animal_husbandry_checkbox',
        'export_animal_husbandry_checkbox',
        'vrh_checkbox',
        'poultry_checkbox',
        'traid_beekeeping_checkbox',
        'export_beekeeping_checkbox',
        'traid_aquaculture_checkbox',
        'export_aquaculture_checkbox',
        'traid_processing_products_for_use_as_food_checkbox',
        'export_processing_products_for_use_as_food_checkbox',
        'activities_in_food_processing_checkbox',
        'wine_industry_checkbox',
        'traid_processing_products_for_use_as_feed_checkbox',
        'export_processing_products_for_use_as_feed_checkbox',
        'traid_growing_seedlings_and_seed_checkbox',
        'export_growing_seedlings_and_seed_checkbox',
        'growing_seedlings_and_seed_after_checkbox',
        'other_2_checkbox',
        'other_3_checkbox',
        'other_5_checkbox',
        'agree_for_first_company'];

    for (var i = 0; i < checkbox_ids.length; i++)
    {


        var element = document.getElementById(checkbox_ids[i]);
        var hid_element = document.getElementById(element.name);

        if(element.checked == true)
        {
            var elements1 = hid_element.getElementsByTagName("*");

            for (var z = 0, len = elements1.length; z < len; z++)
            {
                if ( elements1[z].nodeName =='OPTION' || elements1[z].nodeName =='BUTTON' || elements1[z].title == 'new')
                {
                    // alert(elements1[z].nodeName);
                }

                else
                {
                    elements1[z].style.borderColor = "inherit";

                    if (elements1[z].value =='' )

                    {

                        alert("Будь ласка заповніть всі поля");

                        elements1[z].style.borderColor = "red";
                        elements1[z].scrollIntoView(true);
                        return false;
                    }



                }
            }
        }
    }
    alert ("Дякуємо за заявку \r\n очікуйте на відповідь найблищим часом");
    return true;
}

// функція відкриває input_и в таблицях під час загрузки форми якщо вони були відкриті під час створення
function show_hiden_input_load(cb)
{
    for (var i = 0, len = cb.length; i < len; i++)
    {

        var element = document.getElementById(cb[i]);
        var imp_element = document.getElementById(element.name);
        if (element.value=='')
        {

            imp_element.className = "hidden";

        }
        else
        {
            imp_element.className = "";


        }
    }
}




// функція відкриває DIV під час загрузки форми, якщо вони були відкриті під час створення
function show_hiden_load(cb)
{
    for (var i = 0, len = cb.length; i < len; i++)
    {
        var element = document.getElementById(cb[i]);
        var hid_element = document.getElementById(element.name);

        if(element.checked == true)
        {
            hid_element.style.display = "block";
        }
        else
        {
            hid_element.style.display = "none";
        }
    }
}
// функця для відображення ДІВ при нажатому чекбоксі (Checkbox.name=div.ID)
function show_hiden(cb)
{
    var element = document.getElementById(cb.name);
    if(cb.checked == true)
    {
        element.style.display = "block";
    }
    else
    {
        element.style.display = "none";
    }
}
// функція яка спрацьовує під час загрузки форми і визиває інші функції, також обнуляє змінну для функції контакту з експорту
function on_application_load(){
    sessionStorage.clickcount=0;

    var checkbox_ids = ['add_1_operator_checkbox',
        'add_pid_checkbox',
        'add_1_pid_checkbox',
        'add_2_pid_checkbox',
        'production_crop_production_checkbox',
        'traid_crop_production_checkbox',
        'export_crop_production_checkbox',
        'crop_production_1_checkbox',
        'crop_production_after_checkbox',
        'production_wild_collection_checkbox',
        'traid_wild_collection_checkbox',
        'export_wild_collection_checkbox',
        'wild_collection_after_checkbox',
        'production_animal_husbandry_checkbox',
        'traid_animal_husbandry_checkbox',
        'export_animal_husbandry_checkbox',
        'vrh_checkbox',
        'poultry_checkbox',
        'production_beekeeping_checkbox',
        'traid_beekeeping_checkbox',
        'export_beekeeping_checkbox',
        'production_aquaculture_checkbox',
        'traid_aquaculture_checkbox',
        'export_aquaculture_checkbox',
        'production_processing_products_for_use_as_food_checkbox',
        'traid_processing_products_for_use_as_food_checkbox',
        'export_processing_products_for_use_as_food_checkbox',
        'activities_in_food_processing_checkbox',
        'wine_industry_checkbox',
        'production_processing_products_for_use_as_feed_checkbox',
        'traid_processing_products_for_use_as_feed_checkbox',
        'export_processing_products_for_use_as_feed_checkbox',
        'production_growing_seedlings_and_seed_checkbox',
        'traid_growing_seedlings_and_seed_checkbox',
        'export_growing_seedlings_and_seed_checkbox',
        'growing_seedlings_and_seed_after_checkbox',
        'other_2_checkbox',
        'other_3_checkbox',
        'other_5_checkbox'];
    show_hiden_load(checkbox_ids);

    var input_ids = ['wild_collection_1_1_input',
        'wild_collection_1_2_input',
        'wild_collection_1_3_input',
        'wild_collection_1_4_input',
        'wild_collection_1_5_input',
        'wild_collection_1_5_input',
        'aquaculture_1_1_1_input',
        'aquaculture_1_1_2_input',
        'aquaculture_3_1_1_input',
        'aquaculture_3_1_2_input'];
    show_hiden_input_load (input_ids);
}
// функція для відображення Контакта для експорту при нажатому хочаб 1 чекбоксу з експорту
function show_hidden_export(cb, divID){


    var div_element = document.getElementById(divID);

    if(cb.checked == true)
    {
        if (sessionStorage.clickcount)
        {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        }
        else
        {
            sessionStorage.clickcount = 1;
        }

    }
    else
    {
        if (sessionStorage.clickcount)
        {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) - 1;
        }
        else{
            sessionStorage.clickcount=0;
        }
    }

    if (sessionStorage.clickcount && Number(sessionStorage.clickcount))
    {
        div_element.style.display = "block";
    }
    else
    {
        div_element.style.display = "none";
    }
    show_hiden(cb);

}


// функця для відображення нового рядка в таблицях при заповнені попереднього
function show_hiden_input(cb)
{  element = document.getElementById(cb.name);

    div_element = document.getElementById(cb.name);
    if (element.value=='')
    {

        div_element.className = "hidden";

    }
    else
    {
        div_element.className = "";


    }
}

// функція
function strEndsWith(str, suffix) {
    return str.match(suffix+"$")==suffix;
}
// функція
function get_element_ends_with(my_parent, suffix)
{
    var elements = my_parent.getElementsByTagName("*");
    for (var i = 0, len = elements.length; i < len; i++)
    {
        if (elements[i].name && strEndsWith(elements[i].name, suffix))
            return elements[i];

    }
    return false;
}
// функція яка копіює інформацію з одного діва в інший де суфікси інпутів однакові
function copy_from(div_name_from, div_name_to, suffixes)
{
    var legal_div = document.getElementById(div_name_from);
    var post_div = document.getElementById(div_name_to);
    for (var i = 0, len = suffixes.length; i < len; i++)
    {
        var current_suffix = suffixes[i];
        var legal_region = get_element_ends_with(legal_div, current_suffix);
        var post_region = get_element_ends_with(post_div, current_suffix);
        if (legal_region && post_region)
        {
            post_region.value = legal_region.value;
        }
    }

}

let callSettings = document.querySelector('.search-btn_setings');
let settingsForm = document.querySelector('.search-settings');

if(callSettings && settingsForm){
    callSettings.addEventListener('click', ()=>{
        settingsForm.classList.toggle('_active');
    })
}

let clientPoint = document.querySelectorAll('.params_point-close');

    if(clientPoint){
        clientPoint.forEach((point)=>{
            point.addEventListener('click', ()=>{
                point.parentElement.classList.toggle('_hide')
            })
        })
    }

const btnSetting = document.querySelector('.certificat_setting-btn '),
      btnSettingWrap = document.querySelector('.certificat_form-setting');

if(btnSetting){
    btnSetting.addEventListener('click', ()=> {
        btnSettingWrap.classList.toggle('_active');
        btnSetting.classList.toggle('_active');
    })
}      
if(window.innerWidth < 768.1){
    let menuItem = document.querySelectorAll('.header-nav-item');

        menuItem.forEach((item)=>{
            item.addEventListener('click', (event)=>{
                item.classList.toggle('active');
                item.classList.toggle('clicked');
                document.querySelectorAll('.header-nav-item').forEach((item2)=>{
                    console.log(event.target)
                   if(!event.srcElement.classList.contains('clicked')){
                    item2.classList.remove('active');
                   }
                })
            })
        })


}
function headerHide() {
    let scrollPrev = 0,
        headerHeight = 180;

    if ($(window).width() > 767) {
        $(window).scroll(function () {
            let scrolled = $(window).scrollTop();

            if (scrolled > headerHeight && scrolled > scrollPrev) {
                $('.header-wrap').addClass('header-active');

                if ($('.certificates-table-wrap-titles').length) {
                    $('.certificates-table-wrap-titles').addClass(
                        'table-active'
                    );
                }
            } else {
                $('.header-wrap').removeClass('header-active');

                if ($('.certificates-table-wrap-titles').length) {
                    $('.certificates-table-wrap-titles').removeClass(
                        'table-active'
                    );
                }
            }
            scrollPrev = scrolled;
        });
    }
}
headerHide() ;