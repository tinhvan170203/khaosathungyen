import{n as o}from"./index-af889cc1.js";const n={getKhois(t){const e="/khoi/fetch";return o.get(e,{params:t})},addKhoi(t){const e="/khoi/add";return o.post(e,t)},editKhoi(t){const e=`/khoi/edit/${t.id_edit}`;return o.put(e,t)},deleteKhoi(t,e){const i=`/khoi/delete/${t}`;return o.delete(i,{params:e})}};export{n as k};
