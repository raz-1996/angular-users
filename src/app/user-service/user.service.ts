import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, delay, finalize, Observable, of, pipe, Subject } from "rxjs";
import { __values } from "tslib";
import { UserType } from "../user-type/UserType";

@Injectable({ providedIn: 'root' })
export class UserService {
    private usersUrl = 'https://jsonplaceholder.typicode.com/users';
    editUser: UserType | null = null
    delteId = 0

    constructor(private http: HttpClient) { }

    private _users$ = new BehaviorSubject<UserType[]>([])
    users$ = this._users$.asObservable()

    addValue(user: UserService) {
        return this.http.post<UserType>(this.usersUrl, user).subscribe((user) => {
            this._users$.getValue().forEach((id) => {
                if (id.id >= user.id) {
                    user.id = id.id + 1
                }
            })
            this._users$.next([user, ...this._users$.getValue()])
        })
    }

    fetchUsers() {
        return this.http.get<UserType[]>(this.usersUrl).subscribe(users => {
            this._users$.next(users)
        })
    }

    removeUserType(id?: number) {
        return this.http.delete<void>(`${this.usersUrl}/${id}`).subscribe(() => {
            const del = this._users$.getValue().filter(t => t.id !== id)
            this._users$.next(del)
        })
    }

    editUserData(user: UserType) {
        return this.http.put<UserType>(`${this.usersUrl}/${user.id}`, user)
            .pipe(
                finalize(() => {
                    const sel = this._users$.getValue().map((e) => {
                        if (e.id === this.editUser?.id) {

                            return user;
                        }
                        return e;
                    }
                    )
                    this._users$.next(sel)
                })
            )
            .subscribe()
    }
}


