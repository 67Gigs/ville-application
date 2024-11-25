package fr.esgi.ville_jhipster.repository;

import fr.esgi.ville_jhipster.domain.Joueur;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Joueur entity.
 */
@SuppressWarnings("unused")
@Repository
public interface JoueurRepository extends JpaRepository<Joueur, Long> {}
