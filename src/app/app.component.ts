import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainMenuLinks = [
    // public
    {url: '', text: 'Home'},
    {url: 'login', text: 'Login'},
    // TODO: user
    // {url: 'user', text: 'User Profile'},
    // {url: 'user/preferences', text: 'User Pref.'},
    // {url: 'user/my-cart', text: 'Cart'},
    // shop
    {url: 'shop', text: 'Search'},
    {url: 'shop/details', text: 'Product Details'},
    // TODO: admin
    // {url: 'admin/settings', text: 'Admin: Settings'},
    // {url: 'admin/user-management', text: 'Admin: User Management'},
    // {url: 'admin/reports', text: 'Admin: Reports'},
  ];

}
