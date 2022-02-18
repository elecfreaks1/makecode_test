//% color=#8600FF weight=100 icon="\uf005"
//% block="makecode_test" blockId="makecode_test"
namespace makecode_test {
    //% block="Send Hex data %data_hex"
    export function my_serial_hex(data_hex:number) {
        serial.writeNumber(data_hex)
    }
}