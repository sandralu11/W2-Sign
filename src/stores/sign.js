import { defineStore } from "pinia";

export const useSignStore = defineStore({
  id: "sign",
  state: () => ({
    signImg:[],

  }),
  actions:{
    saveSignImg(base64){
      this.signImg.push(base64)
      LS.save('signImg',this.signImg)
    },
    initSignImg(){
      this.signImg=LS.load('signImg')
    },
    deleteSignImg(index){
      this.signImg.splice(index,1)
      LS.save('signImg',this.signImg)
    }
  }
})

const LS = {
	/**
	 * 讀取localstorage資料
	 * @param {String} listName key名稱
	 * @returns {Array} 若無資料回空陣列,若有則回obj
	 */
	load (listName) {
		return JSON.parse(localStorage.getItem(listName) || '[]')
	},
	/**
	 * 寫入localstorage資料
	 * @param {String} listName key名稱
	 * @param {Object} data 要寫入localstorage的資料
	 */
	save (listName, data) {
		localStorage.setItem(listName, JSON.stringify(data))
	},
	/**
	 * 刪除localstorage資料
	 * @param {string} listName key名稱
	 */
	remove (listName) {
		localStorage.removeItem(listName)
	}
}