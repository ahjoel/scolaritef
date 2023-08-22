import { Component } from '@angular/core';
import 'datatables.net';
declare var $: any; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'schoolfe';

  ngOnInit() {
    (() => {
      'use strict';
      $('#sidebarToggle, #sidebarToggleTop').on('click', function (e: any) {
        $('body').toggleClass('sidebar-toggled');
        $('.sidebar').toggleClass('toggled');
        if ($('.sidebar').hasClass('toggled')) {
          $('.sidebar .collapse').collapse('hide');
        }
      });
  
      $(window).resize(function () {
        if ($(window).width() < 768) {
          $('.sidebar .collapse').collapse('hide');
        }
        if ($(window).width() < 480 && !$('.sidebar').hasClass('toggled')) {
          $('body').addClass('sidebar-toggled');
          $('.sidebar').addClass('toggled');
          $('.sidebar .collapse').collapse('hide');
        }
      });


    })();

    // let isloggedin: string;
    // let loggedUser: string;

    // isloggedin = localStorage.getItem('isloggedIn');
    // loggedUser = localStorage.getItem('loggedUser');
    
    // if (isloggedin != 'true' || !loggedUser) {
    //   this.router.navigate(['/login']);
    // } else {
    //   this.authService.setLoggedUserFromLocalStorage(loggedUser);
    // }
  }
}
