import request from '@/utils/request'
export const getRegion = (id) => {
  return request({
    url: '/houses/condition',
    params: {
      id
    }
  })
}
