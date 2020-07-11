module.exports = function(sequelize, DataTypes) {
    const dbo_UB04 = sequelize.define("dbo_UB04", {
      // Giving the Author model a name of type STRING
        UB04Id: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        PatientId: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },

        FL1: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL1_a: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL1_b: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL1_c: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL3_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL3_b: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL4: { 
            type: DataTypes.STRING,
            allowNull: false
            
        },

        FL5: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL6_a: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL6_b: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL7: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL8_a: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL8_b: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL9_a: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL9_b: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL9_c: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL9_d: { 
            type: DataTypes.STRING,
            allowNull: false
            
        },

        FL9_e: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL10: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL11: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL12: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL13: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL14: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL15: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL16: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL17: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL18: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL19: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL20: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL21: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL22: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL23: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL24: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL25: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL26: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL27: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL28: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL29: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL30: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL31_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL31_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL31_b1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL31_b2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL32_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL32_b1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL32_b2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL32_b: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL33_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL33_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL33_b1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL33_b2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL34_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL34_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL34_b1: { 
            type: DataTypes.STRING,
            allowNull: true 
        },

        FL34_b2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL35_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL35_a1: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL35_a2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL35_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL35_b1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL35_b2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL36_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL36_a1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL36_a2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        Fl36_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL36_b1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL36_b2: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL37_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL37: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL38: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL39_a1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL39_a2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL39_b1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL39_b2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL39_c1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL39_c2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL39_d1: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL39_d2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL40_a1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL40_a2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL40_b1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL40_b2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL40_c1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL40_c2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL40_d1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL40_d2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL41_a1: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL41_a2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL41_b1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL41_b2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL41_c1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL41_c2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL41_d1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL41_d2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL50_a: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL50_b: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL50_c: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL51_a: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL51_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL51_c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL52_a: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL52_b: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL52_c: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL53_a: { 
            type: DataTypes.STRING,
            allowNull: false 
        },

        FL53_b: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL53_c: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL54_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL54_b: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL54_c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL55_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL55_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL55_c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL57_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL57_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL57_c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL58_a: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL58_b: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL58_c: { 
            type: DataTypes.STRING,
            allowNull: false
            
        },

        FL59_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL59_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL59_c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL60_a: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL60_b: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL60_c: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL61_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL61_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL61_c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL62_a: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL62_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL62_c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL63_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL63_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL63_c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL64_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL64_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL64_c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL65_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL65_b: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL65_c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL66: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL67_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67_c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67_d: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67_e: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67_f: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67_g: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL67_h: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67_i: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67_j: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67_k: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67_l: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67_n: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67_m: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67_o: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67_p: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL67_q: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL68_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL68: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL69: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL70_a: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL70_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL70_c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL71: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL72_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL72_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL72_c: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL73: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL74_1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL74_2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL74_a1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL74_a2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL74_b1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL74_b2: { 
            type: DataTypes.STRING,
            allowNull: true 
        },

        FL74_c1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL74_c2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL74_d1: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL74_d2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL74_e1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL74_e2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL75: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL76_a: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL76_b: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL76_c: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL76_d: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL76_e: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL77_a: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL77_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL77_c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL77_d: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL77_e: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL78: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL78_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL78_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL78_c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL78_d: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL78_e: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL79: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL79_a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL79_b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL79_c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL79_d: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL79_e: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL80a: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL80b: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL80c: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL80d: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL81_a1: { 
            type: DataTypes.STRING,
            allowNull: false
            
        },

        FL81_a2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL81_a3: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL81_b1: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL81_b2: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL81_b3: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL81_c1: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL81_c2: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        FL81_d1: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL81_d2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        FL81_d3: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        FL81_c3: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        ModuleID: { 
            type: DataTypes.INTEGER,
            allowNull: true
        },

        ModuleName: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        textInfo1: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        textInfo2: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        textInfo3: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        textInfo4: { 
            type: DataTypes.STRING,
            allowNull: true
            
        },

        textInfo5: { 
            type: DataTypes.STRING,
            allowNull: true
        },

        


    })
  
    // dbo_UBO4LIneitems.associate = function(models) {
    //   // Associating Author with Posts
    //   // When an Author is deleted, also delete any associated Posts
    //   Author.hasMany(models.Post, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return dbo_UB04;
  };