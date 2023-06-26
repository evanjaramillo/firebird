trait InputChannel {
    fn set_payload_size(&mut self, payload_size: u32);
    fn on_data_receive() -> Vec<u8>;
}

#[derive(Default)]
struct UdpInputChannel {
    bind_address: String,
    bind_port: u16,
    payload_size: u32
}