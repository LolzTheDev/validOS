/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/uv/service/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/dist/uv.handler.js',
    client: '/uv/dist/uv.client.js',
    bundle: '/uv/dist/uv.bundle.js',
    config: '/uv/dist/uv.config.js',
    sw: '/uv/dist/uv.sw.js',
};
