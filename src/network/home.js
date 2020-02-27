import {request} from './request.js';

export function getHomeMultiData() {
  return request({
      url: '/home/multidata'
    }
  )
}

