import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(() => {

      $(window).scroll(() => {
        if (($(window).scrollTop()) > ($(window).height()) / 100) {
              $('header').addClass('hdrDown');
              $('[data-name=logo-inverse]').attr('src','https://www.synervatesolutions.com/asset/images/logo-black.png');
        } else {
            $('header').removeClass('hdrDown');
            $('[data-name=logo-inverse]').attr('src','https://www.synervatesolutions.com/asset/images/logo.png');
        }
    }); 

    $('.AbtNavSec ul li').click(function() {
      var dtid = $(this).attr('data-dwntb');
      $('.AbtNavSec ul li').removeClass('ActiveNavSec');
      $(this).addClass('ActiveNavSec');
      $('.AbtCntSec').each(function() {
          if ($(this).attr('data-dwndata') == dtid) {
              if ($(this).hasClass('OpnData')) {
              } else {
                  $('.AbtCntSec').slideUp('slow');
                  $(this).slideDown('slow')
              }
          }
      });
    }); 


      $(".ArwSecLn").click(function(){ 
        $('.SubMnSecShow').slideUp('slow')
        $('.MenSecSyn').addClass('activeMnSec');
        $('.MenuSecTwo').addClass('activeMnSec2');
        $('.dropdown').removeClass('PluSec');
      }); 
      $('.navClose').click(function (){
        $('.MenSecSyn').removeClass('activeMnSec activeMnSec11');
        $('.MenuSecTwo').removeClass('activeMnSec2 activeMnSec222');
        $('.SubMnSecShow').removeClass('SubMnSecShowActive');
    });

    $('.plsIcon').click(function() {
      $(this).parents('.dropdown').toggleClass('PluSec');
      $('.SubMnSecShow').removeClass('AntSecSub');
      $(this).parent().next('.SubMnSecShow').slideToggle('slow').toggleClass('AntSecSub');
    });

    $('.faqTabBx').click(function(){
      $('.faqTabBx').removeClass('activeTab');
      $(this).addClass('activeTab');
      var dataID = $(this).attr('data-id');
      var prvChild = 0;
      var dfltPos = $('.faq-left').css('padding-top') ;
      dfltPos = parseInt(dfltPos);
      var crntHeight = $(this).innerHeight();
      var crntPadd = $(this).css('padding-bottom');
      crntPadd = parseInt(crntPadd);
      var barHeight = crntHeight - crntPadd
      $(this).prevAll().each(function(){
          prvChild = prvChild + $(this).innerHeight(); 
      })
      $('.actBarFQtb').css({'top': (prvChild + dfltPos ), 'height': barHeight})
      $('.faqData-wrap').each(function(){
          var targetID = $(this).attr('data-target');
          if(dataID == targetID ){
              if($(this).hasClass('active')){
                  // do nothing
              }else{
                  $('.faqData-wrap').removeClass('active');
                  $(this).addClass('active');
              }
          }
      })
  });

  $('.faqQsn').click(function(){
    if($(this).parent('.faqBx').hasClass('active')){                
        // do nothing
    }else{
        $(this).parents('.faqData-wrap').find('.faqBx').removeClass('active');
        $(this).parent('.faqBx').addClass('active');
    }
  });

  (function(){
    $('.form-cntrl,.frm-cntrl').focusout(function () {
        if ($(this).val() != "") {
            $(this).siblings('.label-wrap,.label-wrap').addClass('hasVal')
        } else {
            $(this).siblings('.label-wrap,.label-wrap').removeClass('hasVal')
        }
    });        
  })();

  $('.CntSecShow ul li').click(function() {
    var dtid = $(this).attr('data-dwntb');
    $('.CntSecShow ul li').removeClass('CntSecShowActive');
    $(this).addClass('CntSecShowActive');
    $('.MapSec').each(function() {
        if ($(this).attr('data-dwndata') == dtid) {
                $('.MapSec').slideUp('slow');
                $(this).slideDown('slow');
        }
    })
});



  }); 

  }

}
