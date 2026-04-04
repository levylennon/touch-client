function(e, t, i) {
    var n = i(721);
    n.prototype.initBuffer = function(e) {
        var t = this.gl,
            i = t.createBuffer();
        t.bindBuffer(t.ARRAY_BUFFER, i);
        var n = new window.ArrayBuffer(e * this._spriteSize),
            o = new window.Float32Array(n),
            a = new window.Uint32Array(n);
        o[0] = 0, o[1] = 0, a[2] = 0, o[5] = 0, o[6] = 1, a[7] = 4294901760, o[10] = 1, o[11] = 1, a[12] = 4294967295, o[15] = 0, o[16] = 0, a[17] = 0, o[20] = 1, o[21] = 1, a[22] = 4294967295, o[25] = 1, o[26] = 0, a[27] = 65535, a[3] = a[8] = a[13] = a[18] = a[23] = a[28] = 1077952576, a[4] = a[9] = a[14] = a[19] = a[24] = a[29] = 0, t.bufferData(t.ARRAY_BUFFER, n, t.STATIC_DRAW)
    }, n.prototype.updateGPUBuffer = function(e, t) {
        var i = this.gl;
        i.bufferSubData(i.ARRAY_BUFFER, e, t)
    }, n.prototype.isInBuffer = function(e) {
        return this.sFMPartitioner.possess(e)
    }, n.prototype.getBufferData = function(e) {
        return this.sFMPartitioner.touch(e)
    }, n.prototype.lockBuffer = function(e) {
        return this.sFMPartitioner.addLock(e)
    }, n.prototype.releaseBuffer = function(e) {
        return this.sFMPartitioner.release(e)
    }, n.prototype.unlockBuffer = function(e) {
        this.sFMPartitioner.removeLock(e)
    }
}
