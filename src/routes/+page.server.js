export async function load({ fetch }) {
    await WebAssembly.instantiateStreaming(fetch('test.wasm'), {});
}
