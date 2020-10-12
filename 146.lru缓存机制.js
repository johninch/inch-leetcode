/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cache = new Map();
    this.cap = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        const value = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, value)

        return value
    }

    return -1
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key)
    } else {
        // 处理溢出的情况
        if (this.cap === this.cache.size) {
            // 拿到第一个key也就是最少使用的项时，需要使用 next().value 即 Map.keys().next().value
            this.cache.delete(this.cache.keys().next().value)
        }
    }

    this.cache.set(key, value)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

