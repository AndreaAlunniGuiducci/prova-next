import Link from "next/link";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <nav className={styles.header}>
        <Link href="/">
          <img
            src="https://odoocdn.com/web/image/res.partner/2207992/avatar_128/RWSdigital%20s.r.l.s?unique=4e9faad"
            className={styles.logo}
            alt="logo rws digital"
          />
        </Link>
        <div className={styles.wrapperButton}>
          <input
            className={styles.searchInput}
            type="text"
            id="search"
            name="search"
            placeholder="Search"
          />
          <img
            className={styles.ico}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACFklEQVRoge3YP24TQRiH4cfBFgjR80dQpqPhECASrOQGCE5AkRQgClpuAGeAChANNJwBIQqUKMgOASkSKBUoCg7FjFnHcmLvete7sfaVtrFnxr93Z+bbHVNTMw13sI0ulkrOMhVdHMarM/jFQilxsnOm7AB5sIKeZDZulxsnGxfxQ5BYLzlLZhp4K0h8cPq2w3/WBImfuFZylsxcx29BZLXkLJk5h4+CxLOSsxx5gC2n7PtckPiM8znnSs3gA2wbzQn7rcY+f3CjmGiTc0tS9/vXBu45WegKdmP7tYIznkgDD3EQw+xhB1sSoU3cR2uo7wLexzbv4lilcAEvYpAenkrqfgt38UUi9BUPcDa2WY+f7woz0+dwzJUri/gUB/6F9jHtWsJsbA4E2cJ3yQ1YGeozM5F2DH8oyCxO0Kcp7JeNoVA7I9oWLtLAE/yNA74Ullcamvg2EKozok1hIu3443txoANhg2fdnMtCqT7urbYQkauO3sGeUGqLJDeRBeGuvZKU1ZOWQt5MLXIZj4Uy2e+0j9eCwKwOOKlF+u9GHbwRQg8+xB7hUtGpR5BapDvUYF+oRDelO9DkvTmnEukKR8wslC6yJAhM+7/RzEWKeikbFzbt744d79Qe5IeZ9KBTFLnN3NzMyNyIpF1aeW/i3JibGalFqkZ/j1R27U/K3MxILVI1apGqUYtUjVqkatQiVaMWqRr/AAqtAA8ufn+zAAAAAElFTkSuQmCC"
          />
          <img
            className={styles.ico}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC5ElEQVRogd2aO2/TUBSAP1wQAZGupAIkhBCvjRTRga1IgCCCiRUJgWBkZMtK2QggpP6KkiAGGEFlKxMqYyFNGfgJKBEM1yaO63vPvfZ1HPeTjlSlyXn4PHIfgWKpAZ+BT+HfleU58DeUlZJ9ycwSMGQcyAi4UqpHGTgIfGMcRCTfgUMl+uVMvKSSUpkSS5ZUUipRYrqSSiuxqU6xd0Af6AJt4BbQMLx/BTkImxJrhLbaoe0+0DM5uk8IZBs4nvL6DrARk6/ABeADMCfojBgB14FNoAksxuRYyvsHwAlL3bvoYv+Ei5a3JkcDIZAN24ingNGXPROIxFHKL6lITENGbHZQTZbWfDqiKfce+BF+HtTQOAm0gDu4Ne4O6UPHCduGHwCPsJtaAXAX2LLUbWx0W9oWhtaAIxl017F7UO1cEYS0BCMvkIeGiQDoCDZaOfT/Z8FgYI18QUQEmDOz4MEGVzXKt8lWTjrqqKZOs7WcR3ENtR7SrWTv51Gu4aHG1ghYBQ67KlxCrYF0qf6J/ZrKhTlUpnV2N0PfRKQsRNLx6v4krwXbYnakLMTlRkFBANy09GFXdmyzEJfTBQZy1sGPiex8cfhgJPUCA6ln8Gfdx3fAzJCltM4U6M85Bz9SG7/yzR7nAPAU+CMoeVVQEABvBNtDVAVZncJI2elTzBfifjx9IcaRsvPAg+NJHmtsOWVBx7JG+QC/Y3ge+KWxlWvRGGFaxnfxt4zvGex4WcZLG6sO+TdWLwUbXjZWNlvdLtnKbB51LCvp97LVNaU8Lr+BJ6jJIxEA99D3RNqDMlLEcdCA8XHQFpPHQadQh9O3cTveyX0c1MDuiU1DjA0vNekl24inQNP0TymQRY+O5MXoy54JRJowFzWvp130nAc+4nbRcw11DWdz0WMsLYkeFbl6883MXoZmoYl5PzMELpfmnSOmEntWol/OmH7CMfMllSRZYpUqqSTxEqtUSSWpoQ4A1ym4pP4BtXVzu5lhsdQAAAAASUVORK5CYII="
          />
          <img
            className={styles.ico}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA30lEQVRIieXUP0oDYRCG8V+0CHgCRQURPIJtOvucwTPkCl5GBBHBQlJpuhTJDVLEIAgpDEIq2RS7yrKSb1ccqx14q2GeB74/Q5uqj0dc/Af8ClmRN1xiLwreL8HLmeE0QjDcIshwGyFYJQTvdcM7DQQfiV4WIXhI9IYN5mvrCK9+Hs8SZxECOMG1/D5WuImEt7w6id4uevLdc45DHBe9OV4wlr+kJ3w2lXYxwML2D1bNopjp1sEPMP0FuJoJ9lOC+z/Av3KXEqwDBOsysHrJtbulYX1zq7toFAB/DmC0qTZtUm/ly748mgAAAABJRU5ErkJggg=="
          />
          <img
            className={styles.ico}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABtElEQVRoge2Zu0oDQRSGPxcb9QU0NlaWgoX6CuZiY28l+AKC29gY8iaC6DN4QawEU1nbmKQSLExEo4KxmFnc7MW9JM6Ocj4YBs45s/n/7GYzexYEQchKDTgHnoGBZaOntVWTTDQsEJt21ONM1HTBG7AHlJJcF0AJcFEaB0AlquhCJ11zunLjorSeRSV7OjlnUlFOZlFau1FJ79r7KwzpdQoUMlbEiG2IEdsQI7YhRmwjr5Eq0AHaQNlgXSqybFHavvqWwTo//3OL4ifLGSmjvsUWsG6wzk+sXtn92oAYsQ0xYhtixDbEiG34jfT0bGOrNMi8np+8gN/IjZ63jMnJj6exGZWs8t3EdrHzzASb2LHPLnWS2/mnMWsd4DLF+nGNgyTXFVSXu/vDQWYi1m0YEN/V2kZ+iuzoAy4E4hPAtc5tjvohJrhDiV0KxLd1vIkyZTUO8EL4Hcoy6n3jO7BSgK7MrBFuDqwCDzq+W4SorDioH5l3t5gG9oG+jjWKk5aeKeAQJfgDOEL9ow5Ql9pOcdKycUX4NvgJnACLBeoaYjJFTR94BR6BW5SxY+D+F3UJgjBmvgBuWgSyFnsGnAAAAABJRU5ErkJggg=="
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
