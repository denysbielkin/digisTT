import md5 from 'js-md5';
import isNil from 'lodash/isNil';

export const urls = {
    routes: {
        signIn: '/auth',
        main: '/',
        about: '/about'
    }
};

export const mapAPIkey = 'AIzaSyAxOeOO5IXuUjz2c4WfctJcjOp75fM43yA';

export const storageAdminCredKey = 'adminCred';
export const storageMarkersKey = 'markers';
export const storageTokenKey = 'token';
export const storageTokenValue = md5.create(); // in usual situation, this token i'd get by back-end, but, i haven't it. So, i will simulate back-end by local storage

export const isTokenExist = !isNil(localStorage.getItem(storageTokenKey))