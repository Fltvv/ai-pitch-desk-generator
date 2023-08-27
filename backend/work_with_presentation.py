import pptx_functions as pptx_f
import work_with_server as server

from connection_to_sql import SqlClass

from time import sleep


sql = SqlClass()

picture_types = ['description', 'market', 'name', 'product']


def check_database_generate_presentation_and_upload_to_server():
    while True:
        criteria_to_create_presentation = len(sql.get_id_to_create_presentation())

        if criteria_to_create_presentation > 0:
            id_startup = sql.get_id_to_create_presentation()[0][0]

            ftp_image_name_lst = [f'{id_startup}_{picture_type}.jpg' for picture_type in picture_types]

            for ftp_image_name in ftp_image_name_lst:
                try:
                    server.load_image_from_server(ftp_image_name)
                except:
                    pass

            for background_style in ['white', 'black']:
                for language in ['ru']:
                # for language in ['ru', 'en']:
                    root = pptx_f.Presentation(f'./presentations/templates/template_{language}.pptx')

                    root = pptx_f.create_presentation(template_presentation=root,
                                                      id_startup=id_startup,
                                                      background_style=background_style,
                                                      language=language,
                                                      save_as=f'./presentations/created_pitch_desks/{id_startup}_{background_style}_{language}.pptx'
                                                      )

                    server.upload_presentation_to_server(f'{id_startup}_{background_style}_{language}.pptx')

                    print(f'PITCH-DESK WAS ADDED TO SERVER (STARTUP ID = {id_startup})')

            sql.update_table_base(id_startup)

            print(f'DATA BASE WAS UPDATED')

        sleep(10)


if __name__ == '__main__':
    check_database_generate_presentation_and_upload_to_server()
