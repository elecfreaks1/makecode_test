//% color=#8600FF weight=100 icon="\uf005"
//% block="makecode_test" blockId="makecode_test"
namespace makecode_test {
    //% block="Send Hex data %data_hex"
    //shim=redefine_serial::write_serial_hex
    export function write_serial_hex(data_hex: number) {
    }

    //% block="%on_off all XGO servo"
    export function servo_switch(on_off:number) {
        let commands_buffer = pins.createBuffer(9)
        commands_buffer[0] = 0x55
        commands_buffer[1] = 0x00
        commands_buffer[2] = 0x09
        commands_buffer[3] = 0x00
        commands_buffer[4] = 0x20
        commands_buffer[5] = on_off
        commands_buffer[7] = 0x00
        commands_buffer[8] = 0xAA
        commands_buffer[6] = ~(0x09 + 0x00 + 0x20 + commands_buffer[5])
        serial.writeBuffer(commands_buffer)
    }
}