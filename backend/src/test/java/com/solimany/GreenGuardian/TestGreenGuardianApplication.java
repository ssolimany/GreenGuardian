package com.solimany.GreenGuardian;

import org.springframework.boot.SpringApplication;

public class TestGreenGuardianApplication {

	public static void main(String[] args) {
		SpringApplication.from(GreenGuardianApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
