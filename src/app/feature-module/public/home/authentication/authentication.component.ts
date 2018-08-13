import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Account, LOGIN_MIN_LENGTH, PASSWORD_MIN_LENGTH} from '../../../../shared/model/authentication/account.model';
import {LocalStorageUtils} from '../../../../shared/util/local-storage.utils';
import {AuthenticationService} from '../../../../shared/service/auth/authentication.service';
import {PublicBaseComponent} from '../../public-base.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent extends PublicBaseComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    super();
  }

  account: Account = new Account();
  loginMinLength = LOGIN_MIN_LENGTH;
  passwordMinLength = PASSWORD_MIN_LENGTH;

  ngOnInit() {
  }

  reset() {
    this.account = new Account();
  }

  isAccountInValid() {
    return !this.account.login || this.account.login.length < this.loginMinLength
      || !this.account.password || this.account.password.length < this.passwordMinLength;
  }

  authentication() {
    this.authenticationService.login(this.account).subscribe(rs => {
      if (rs && rs.access_token) {
        LocalStorageUtils.saveAccessToken(rs.access_token);
        LocalStorageUtils.saveExpiresIn(rs.expires_in);
        LocalStorageUtils.saveRefreshToken(rs.refresh_token);

        // Go to home page
        this.router.navigate(['/company']);
      }
    });
  }
}
