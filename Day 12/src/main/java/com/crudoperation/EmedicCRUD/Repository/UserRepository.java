package com.crudoperation.EmedicCRUD.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crudoperation.EmedicCRUD.Entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long>{

}
