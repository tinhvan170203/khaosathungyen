import{n as e}from"./index-cb7c9cfe.js";const a={getDataForAddPerson(n){const t="/can-bo/initial";return e.get(t,{params:n})},getDoiWhenDonviChange(n){const t="/can-bo/change-doi-of-don-vi";return e.get(t,{params:n})},addPerson(n){const t="/can-bo/add";return e.post(t,n)},fetchDangvienList(n){const t="/can-bo/dang-vien-list/fetch";return e.get(t,{params:n})},editPerson(n){const t="/can-bo/edit";return e.put(t,n)},chuyenCongtac(n){const t=`/can-bo/chuyen-cong-tac/${n.id}`;return e.put(t,n)},changeBacham(n){const t="/can-bo/change/bac-ham";return e.put(t,n)},changeChucvu(n){const t="/can-bo/change/chuc-vu";return e.put(t,n)},deletePerson(n,t){const c=`/can-bo/delete/${n}`;return e.delete(c,{params:t})},getChucvuPlus(n){const t=`/can-bo/chuc-vu-nang-cao/${n}`;return e.get(t)},changeChucvuPlus(n){const t=`/can-bo/chuc-vu-nang-cao/${n.id}/${n.id_item}`;return e.put(t,n)},deleteChucvuPlus(n,t){const c=`/can-bo/chuc-vu-nang-cao/${n}/${t}`;return e.delete(c)},getBachamPlus(n){const t=`/can-bo/bac-ham-nang-cao/${n}`;return e.get(t)},changeBachamPlus(n){const t=`/can-bo/bac-ham-nang-cao/${n.id}/${n.id_item}`;return e.put(t,n)},deleteBachamPlus(n,t){const c=`/can-bo/bac-ham-nang-cao/${n}/${t}`;return e.delete(c)},getDonviPlus(n){const t=`/can-bo/don-vi-nang-cao/${n}`;return e.get(t)},changeDonviPlus(n){const t=`/can-bo/don-vi-nang-cao/${n.id}/${n.id_item}`;return e.put(t,n)},getDoiPlus(n){const t=`/can-bo/doi-nang-cao/${n}`;return e.get(t)},upTruongthanhdoan(n){const t=`/can-bo/truong-thanh-doan/${n.id}`;return e.put(t,n)},fetchYearMonth(){const n="/can-bo/fetch/year-month";return e.get(n)},fetchThiduathang(n){const t="/can-bo/fetch/thi-dua-thang";return e.get(t,{params:n})},updateThiduathang(n){const t="/can-bo/update/thi-dua-thang";return e.put(t,n)},fetchThiduanam(n){const t="/can-bo/fetch/thi-dua-nam";return e.get(t,{params:n})},updateThiduanam(n){const t="/can-bo/update/thi-dua-nam";return e.put(t,n)},fetchCanboStatusDelete(n){const t="/can-bo/list/delete";return e.get(t,{params:n})},deletePersonAdvaned(n){const t=`/can-bo/delete/advanced/${n}`;return e.delete(t)},changeActive(n){const t=`/can-bo/change-active/${n}`;return e.get(t)},detailDoanvien(n){const t=`/can-bo/detail-doan-vien/${n}`;return e.get(t)},getDonvikhactinh(){const n="/can-bo/donvikhactinh";return e.get(n)},postChuyenkhactinh(n){const t=`/can-bo/chuyencongtackhactinh/${n.id}`;return e.put(t,n)},getDoanvienNgoaitinh(n){const t="/can-bo/doan-vien-ngoai-tinh";return e.get(t,{params:n})},backToCongantinh(n){const t=`/can-bo/chuyen-ve-tinh/${n}`;return e.get(t)}};export{a as c};