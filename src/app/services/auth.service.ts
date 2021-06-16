import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLooged: boolean;
  constructor(public afAuth: AngularFireAuth, private router: Router) {}
  // Autentificación con firebase
  async loginAuth(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigateByUrl('/');
      this.isLooged = true;
    } catch (error) {
      console.log(error);
    }
  }
  async registerAuth(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      this.isLooged = true;

      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async logout() {
    try {
      await this.afAuth.signOut();
      window.location.reload();
      this.isLooged = false;
    } catch (error) {
      console.log(error);
    }
  }
  logueado() {
    return this.isLooged;
  }
}
