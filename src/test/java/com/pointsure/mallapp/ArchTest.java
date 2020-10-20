package com.pointsure.mallapp;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.pointsure.mallapp");

        noClasses()
            .that()
            .resideInAnyPackage("com.pointsure.mallapp.service..")
            .or()
            .resideInAnyPackage("com.pointsure.mallapp.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.pointsure.mallapp.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
