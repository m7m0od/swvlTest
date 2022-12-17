import { Component } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor() {
   
    $(document).ready(() =>{
      $(".btnset").click(function(){
        $(".btnsetAction").toggle("add");
    });

    $(".navSpanOne").click(function(){
      $(".navSpanOne").addClass('active');
      $('.navSpanTwo').removeClass('active');
  });
  $(".navSpanTwo").click(function(){

    $(".navSpanTwo").addClass('active');
    $('.navSpanOne').removeClass('active');
  });

  });
  }

}
