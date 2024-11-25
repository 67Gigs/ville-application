package fr.esgi.ville_jhipster.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class VilleAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertVilleAllPropertiesEquals(Ville expected, Ville actual) {
        assertVilleAutoGeneratedPropertiesEquals(expected, actual);
        assertVilleAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertVilleAllUpdatablePropertiesEquals(Ville expected, Ville actual) {
        assertVilleUpdatableFieldsEquals(expected, actual);
        assertVilleUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertVilleAutoGeneratedPropertiesEquals(Ville expected, Ville actual) {
        assertThat(expected)
            .as("Verify Ville auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertVilleUpdatableFieldsEquals(Ville expected, Ville actual) {
        assertThat(expected)
            .as("Verify Ville relevant properties")
            .satisfies(e -> assertThat(e.getNom()).as("check nom").isEqualTo(actual.getNom()))
            .satisfies(e -> assertThat(e.getCodePostal()).as("check codePostal").isEqualTo(actual.getCodePostal()))
            .satisfies(e -> assertThat(e.getNbHabitants()).as("check nbHabitants").isEqualTo(actual.getNbHabitants()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertVilleUpdatableRelationshipsEquals(Ville expected, Ville actual) {
        assertThat(expected)
            .as("Verify Ville relationships")
            .satisfies(e -> assertThat(e.getRegion()).as("check region").isEqualTo(actual.getRegion()));
    }
}