"""
High-level datasets

"""

from __future__ import annotations

from invenio_i18n import lazy_gettext as _
from invenio_records_permissions.generators import AuthenticatedUser
from oarepo_model.api import model
from oarepo_model.customizations import AddMetadataExport, PrependMixin
from oarepo_model.datatypes.registry import from_yaml
from oarepo_model.model import ModelMixin
from oarepo_rdm.model.presets import rdm_complete_preset

from .serializers import DataCiteJSONSerializer


class DatasetsPermissionPolicyMixin(ModelMixin):
    """Custom permission policy for datasets."""

    can_view_deposit_page = [AuthenticatedUser()]


datasets_model = model(
    "datasets",
    version="1.0.0",
    presets=[rdm_complete_preset],
    types=[
        from_yaml("metadata.yaml", __file__),
        from_yaml("activity_collection.yaml", __file__),
        from_yaml("activity_growth_protocol.yaml", __file__),
        from_yaml("activity_image_acquisition.yaml", __file__),
        from_yaml("activity_image_analysis.yaml", __file__),
        from_yaml("activity_image_processing.yaml", __file__),
        from_yaml("activity_sample_preparation.yaml", __file__),
        from_yaml("activity_synthesis.yaml", __file__),
    ],
    metadata_type="Metadata",
    customizations=[
        # Add your customizations here, such as custom exports and class mixins.
        # The list of available extensions is at https://github.com/oarepo/oarepo-model.
        # If you do not find a customization that suits your needs or need a
        # help with using customizations, please contact us at support@cesnet.cz and
        # specify the keyword "Invenio repository development" inside the subject or
        # mail body of the request.
        # TODO: remove this customization if you use oarepo-communities for RDM 14
        PrependMixin("PermissionPolicy", DatasetsPermissionPolicyMixin),
        # export for datacite
        AddMetadataExport(
            code="datacite",
            name=_("Datacite export"),
            mimetype="application/vnd.datacite.datacite+json",
            serializer=DataCiteJSONSerializer(),
        ),
    ],
    configuration={"ui_blueprint_name": "datasets_ui"},
)
