/*
 * @Author: your name
 * @Date: 2020-03-24 17:53:30
 * @LastEditTime: 2020-03-24 23:11:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_learn/10_demo/build-webpack/test/unit/webpack-unit-test.js
 */

const assert = require('assert');

describe('webpack.base.js test case',() => {
    const baseConfig = require('../../lib/webpack.base.js')
    it('entry',()=>{
        assert.equal(baseConfig.entry.index.indexOf('build-webpack/test/smoke/template/src/index/index.js')>-1,true)
    })
})